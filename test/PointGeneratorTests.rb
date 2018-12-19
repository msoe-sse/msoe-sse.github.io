require File.expand_path('./_plugins/PointGenerator.rb')
require 'test/unit'

class PointGeneratorTests < Test::Unit::TestCase
  def test_json_content
    # Arrange
    test_excel_file = "#{Dir.pwd}/test/resources/test attendance counts.xlsx"
    expected_meetings = [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
                          'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', ]

    generator = PointGenerator.new

    # Act
    json = generator.parse_excel_files([ test_excel_file ])
    parsed_json = JSON.parse(json)

    # Assert
    assert_equal(expected_meetings, parsed_json['meetings'])
    assert_student('Grace Fleming', [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ], 4, parsed_json['students'][0])
    assert_student('wojciechowskia@msoe.edu', [ 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 ], 5, parsed_json['students'][1])
    assert_student('Joesph Weller', [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ], 2, parsed_json['students'][2])
    assert_student('Gerald', [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ], 7, parsed_json['students'][3])
  end

  def assert_student(expected_name, expected_point_breakdown, expected_point_total, actual_student)
    assert_equal(expected_name, actual_student['name'])
    assert_equal(expected_point_breakdown, actual_student['pointBreakdown'])
    assert_equal(expected_point_total, actual_student['pointTotal'])
  end
end
