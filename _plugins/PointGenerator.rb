require 'jekyll'
require 'find'
require 'rubyXL'
require 'json'

class PointGenerator < Jekyll::Generator 
  def generate(site)
    make_data_directory_if_necessary()
    excel_files = get_all_excel_file_names()
    json = parse_excel_files(excel_files)
    create_json_file(json)
  end

  def get_all_excel_file_names()
    result = []
    Find.find(parent_directory) do |path|
      result << path if path =~ /.*\.xlsx$/
    end
    return result
  end

  def parse_excel_files(excel_files_names)
    #TODO: Should we handle multiple excel files?
    excel_file_name = excel_files_names[0]
    workbook = RubyXL::Parser.parse(excel_file_name)
    worksheet = workbook[0]
    meetings = parse_meetings(worksheet)
    students = parse_students(worksheet)
    return JSON.pretty_generate({meetings: meetings, students: students})
  end

  def parse_meetings(worksheet)
    result = []
    worksheet[0].cells.each do |cell|
      if cell && cell.value && "Totals".casecmp(cell.value) != 0
        result << cell.value
      end
    end
    return result
  end

  def parse_students(worksheet)
    result = []
    worksheet.each { |row|
      name = ""
      point_breakdown = []
      total_points = 0
      row.cells.each { |cell| 
        if cell && cell.row != 0 && cell.column === 0
          name = cell.value
        elsif cell && cell.row != 0 && cell.column === row.cells.last.column
          total_points = cell.value
        else
          if cell && cell.value
            point_breakdown << cell.value
          else
            point_breakdown << 0
          end
        end
      }
      if name != ""
        result << StudentData.new(name, point_breakdown, total_points)
      end
    }
    return result.map{|data| {name: data.name, pointBreakdown: data.point_breakdown, pointTotal: data.total_points}}
  end

  def create_json_file(json)
    file_name = "#{path}/points.json"
    open(file_name, "wb") do |file|
      file << json
    end
  end
    
  def path
    return File.join(parent_directory, "_data")
  end

  def parent_directory
    return File.expand_path(".", Dir.pwd)
  end

  def make_data_directory_if_necessary()
    Dir.mkdir(path) unless Dir.exist?(path)
  end
end

class StudentData
  def initialize(name, point_breakdown, total_points)
    @name = name
    @point_breakdown = point_breakdown
    @total_points = total_points
  end

  def name
    @name
  end

  def point_breakdown
    @point_breakdown
  end

  def total_points
    @total_points
  end
end