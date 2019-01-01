require 'jekyll'
require 'find'
require 'rubyXL'
require 'json'

class PointGenerator < Jekyll::Generator
  def generate(site)
    make_data_directory
    excel_files = find_all_excel_file_names
    json = parse_excel_files(excel_files)
    create_json_file(json)
  end

  def find_all_excel_file_names
    result = []
    Find.find(parent_directory) do |path|
      result << path if path =~ /.*\.xlsx$/
    end
    result
  end

  def parse_excel_files(excel_files_names)
    excel_file_name = excel_files_names[0]
    workbook = RubyXL::Parser.parse(excel_file_name)
    worksheet = workbook[0]
    meetings = parse_meetings(worksheet)
    students = parse_students(worksheet)
    JSON.pretty_generate(meetings: meetings, students: students)
  end

  def parse_meetings(worksheet)
    result = []
    worksheet[0].cells.each do |cell|
      result << cell.value if cell && cell.value && 'Totals'.casecmp(cell.value) != 0
    end
    result
  end

  def parse_students(worksheet)
    result = []
    worksheet.each do |row|
      name = ''
      point_breakdown = []
      total_points = 0
      row.cells.each do |cell|
        if cell && cell.row != 0 && cell.column.zero?
          name = cell.value
        elsif cell && cell.row != 0 && cell.column == row.cells.last.column
          total_points = cell.value
        else
          point_breakdown << if cell && cell.value
                               cell.value
                             else
                               0
                             end
        end
      end
      result << StudentData.new(name, point_breakdown, total_points) if name != ''
    end
    result = result.map { |data| { name: data.name, pointBreakdown: data.point_breakdown, pointTotal: data.total_points } }
    result.sort_by { |hsh| hsh[:pointTotal] }.reverse!
  end

  def create_json_file(json)
    file_name = "#{path}/points.json"
    File.open(file_name, 'wb') do |file|
      file << json
    end
  end

  def path
    File.join(parent_directory, '_data')
  end

  def parent_directory
    File.expand_path('.', Dir.pwd)
  end

  def make_data_directory
    Dir.mkdir(path) unless Dir.exist?(path)
  end
end

class StudentData
  def initialize(name, point_breakdown, total_points)
    @name = name
    @point_breakdown = point_breakdown
    @total_points = total_points
  end

  attr_reader :name

  attr_reader :point_breakdown

  attr_reader :total_points
end
