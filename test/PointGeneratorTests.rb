require File.expand_path('./_plugins/PointGenerator.rb')
require 'webmock/test_unit'
require 'json'

class PointGeneratorTests < Test::Unit::TestCase
  def test_parse_json_from_api
    # Arrange
    data = response_data

    json_data = data.to_json

    dummy_config = {}
    dummy_config['APIBaseUrl'] = 'https://www.api.com'

    site = DummyJekyllSite.new(dummy_config)
    stub_request(:get, 'https://www.api.com/points').to_return(status: 200, body: json_data, headers: {})

    generator = PointGenerator.new
    generator.instance_variable_set(:@site, site)

    # Act
    result = generator.parse_json_from_api
    result_hash = JSON.parse(result)

    # Assert
    assert_requested :get, 'https://www.api.com/points', times: 1

    assert_equal data[:meetings], result_hash['meetings']

    assert_student 'student0', [ 0, 1 ], 1, result_hash['students'][0]
    assert_student 'student1', [ 1, 1 ], 2, result_hash['students'][1]
  end

  def assert_student(expected_name, expected_point_breakdown, expected_point_total, actual_student)
    assert_equal(expected_name, actual_student['name'])
    assert_equal(expected_point_breakdown, actual_student['pointBreakdown'])
    assert_equal(expected_point_total, actual_student['pointTotal'])
  end

  class DummyJekyllSite
    def initialize(config)
      @config = config
    end

    attr_reader :config
  end

  private

  def response_data
    {
      meetings: [ 'meeting1', 'meeting2' ],
      students: [
        {
          name: 'student0',
          pointBreakdown: [ 0, 1 ],
          pointTotal: 1,
        },
        {
          name: 'student1',
          pointBreakdown: [ 1, 1 ],
          pointTotal: 2,
        },
      ],
    }
  end
end
