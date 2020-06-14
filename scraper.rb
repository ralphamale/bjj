require 'nokogiri'
require 'open-uri'

$storage = Hash.new { |h,k| h[k] = [] }

class AthleteResult
  attr_accessor :weight_class, :belt_color, :age, :gender, :rank, :nombre, :school

  def initialize(weight_class: nil, belt_color: nil, age: nil, gender: nil, rank: nil, nombre: nil, school: nil)
    @weight_class = weight_class
    @belt_color = belt_color
    @age = age
    @gender = gender
    @rank = rank
    @nombre = nombre
    @school = school
  end

  def to_s
    self.inspect
  end

  def to_json

  end
end


class QueueElement
  attr_accessor :year, :url

  def initialize(year:, url:)
    @year = year
    @url = url
  end

  def page_layout
    if Scraper::NEW_LAYOUT_YR_TO_ID.keys.include?(year)
      :new
    else
      :old
    end
  end

end

class Scraper
  START_YEAR = '2015'
  
  END_YEAR = '2019'

  NEW_LAYOUT_YR_TO_ID = {
    '2018' => '926',
    '2019' => '1209',
  }

  attr_accessor :queue

  def initialize
    @queue = init_queue
  end

  def process
    until queue.empty?
      URLProcessor.new(queue.pop).process
    end
  end

  private

  def init_queue
    @queue = (START_YEAR..END_YEAR).inject(Queue.new) do |a, yr| 
      a << QueueElement.new(year: yr, url: determined_url(yr))
    end
  end

  def determined_url(yr)
    if yr.between?('2015', '2017')
      "https://ibjjf.com/results/world-jiu-jitsu-championship-" + yr + "-results/"
    elsif yr.between?('2018', '2019')
      "https://www.ibjjfdb.com/ChampionshipResults/" + NEW_LAYOUT_YR_TO_ID[yr] + "/PublicResults"
    else
      raise "Invalid or unsupported year range."
    end
  end
end

class URLProcessor
  attr_accessor :queue_element

  def initialize(queue_element)
    @queue_element = queue_element
  end

  def process
    doc = URLLoader.new(queue_element.url).doc

    transformed_data = 
      if queue_element.page_layout == :new
        NewLayoutTransformer.new(
          year: queue_element.year, 
          doc: doc,
        ).process
      else
        OldLayoutTransformer.new(
          year: queue_element.year, 
          doc: doc,
        ).process
      end

    data_loader = DataLoader.new(
      year: queue_element.year, 
      transformed_data: transformed_data,
    )

    data_loader.load_data
  end
end

class DataLoader
  attr_reader :year, :transformed_data
  def initialize(year:, transformed_data:)
    @year = year
    @transformed_data = transformed_data
  end

  def load_data
    $storage[year] += transformed_data
  end
end


class PageTransformer
  attr_accessor :year, :doc

  def initialize(year:, doc:)
    @year = year
    @doc = doc
  end

  def process
    raise 'Not Implemented'
  end

  private

  def transformed_object(rank:, nombre:, school:, belt_color:, age:, gender:, weight_class:)
    AthleteResult.new(
      rank: rank, 
      nombre: nombre, 
      school: school, 
      belt_color: belt_color, 
      age: age, 
      gender: gender, 
      weight_class: weight_class,
    )
  end

  def parse_category_header
    raise 'Not implemented'
  end
end

class NewLayoutTransformer < PageTransformer
  def initialize(year:, doc:)
    super
  end

  def process
    athletes_with_category_array = doc.css('.col-athlete .subtitle')

    athletes_with_category_array.inject(Array.new) do |acc1, grouping|
      age, gender, belt_color, weight_class = parse_category_header(grouping)

      athlete_items = grouping.next.next.css('.athlete-item')

      acc1 += athlete_items.inject(Array.new) do |acc2, athlete_item|
        rank, fighter_name, school = athlete_item.text.split("   ").map(&:strip).compact.reject{|y| y.empty? }
        acc2 << transformed_object(
          rank: rank, 
          nombre: fighter_name, 
          school: school, 
          belt_color: belt_color, 
          age: age, 
          gender: gender, 
          weight_class: weight_class,
        )

        acc2
      end

      acc1
    end
  end

  private

  def parse_category_header(grouping)
    grouping.text.split("/").map(&:strip)
  end
end

class URLLoader
  attr_reader :url

  def initialize(url)
    @url = url
  end

  def doc
    Nokogiri::HTML(open(url))
  end
end

class OldLayoutTransformer < PageTransformer
	def initialize(queue_element)
		super
	end

	def process
    results_by_category = doc.css('p:contains("Athletes Results By Category") ~ p')

    results_by_category.inject([]) do |acc1, result_list_by_category|
      category_header = result_list_by_category.children[0].text
      belt_color, age, gender, weight_class = parse_category_header(category_header)

      acc1 += (1...result_list_by_category.children.length).inject([]) do |acc2, i|
        result_text = result_list_by_category.children[i].text
        rank, fighter_name, school = result_text.split("–").map(&:strip)
        acc2 << transformed_object(
          rank: rank, 
          nombre: fighter_name, 
          school: school, 
          belt_color: belt_color, 
          age: age, 
          gender: gender, 
          weight_class: weight_class,
        )
        acc2
      end
    end
	end

  private

  def parse_category_header(grouping)
    grouping.split(" / ")
  end
end


Scraper.new.process

puts $storage
