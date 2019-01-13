require File.expand_path('./_plugins/PointGenerator.rb')
require 'webmock/test_unit'
require 'json'

class PointGeneratorTests < Test::Unit::TestCase
  def test_parse_json_from_api
    # Arrange
    data = {
      meetings: [ 'meeting1', 'meeting2' ],
      students: [
        {
          name: 'student0',
          pointBreakdown: [ 0, 1 ],
          total: 1,
        },
        {
          name: 'student1',
          pointBreakdown: [ 1, 1 ],
          total: 2,
        },
      ],
    }

    json_data = data.to_json

    dummy_config = {}
    dummy_config['APIBaseUrl'] = 'https://www.api.com'

    site = DummyJekyllSite.new(dummy_config)
    stub_request(:get, 'https://www.api.com/points').to_return(status: 200, body: json_data, headers: {})

    generator = PointGenerator.new
    generator.instance_variable_set(:@site, site)

    # Act
    generator.parse_json_from_api

    # Assert
    assert_requested :get, 'https://www.api.com/points', times: 1
  end

  class DummyJekyllSite
    def initialize(config)
      @config = config
    end

    attr_reader :config
  end
end
