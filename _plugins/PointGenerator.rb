require 'jekyll'
require 'json'
require 'net/http'

class PointGenerator < Jekyll::Generator
  def generate(site)
    @site = site
    make_data_directory
    json = parse_json_from_api
    create_json_file(json)
  end

  def parse_json_from_api
    base_url = @site.config['APIBaseUrl']
    uri = URI("#{base_url}/points")
    response_hash = JSON.parse(Net::HTTP.get(uri))
    JSON.pretty_generate(response_hash)
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
