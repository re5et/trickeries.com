---
layout: post
---

I have introduced a [Rotten Tomatoes Rubygem](http://rubygems.org/gems/rotten-tomatoes) that allows you to search for and pull information on movies.  Another step towards a crazy personal movie database / player I am casually working on.

Currently this only lets you pull information on movies, but I intend to add the ability to get person information as well.  The movie info fetcher is pretty thorough, although it could stand to be fancier, and probably will be.

The below is a simple script that demonstrates some of this:

{% highlight ruby %}
#! /usr/bin/env ruby

require 'rubygems'
require 'rotten-tomatoes'

print "Movie Name: "
movie_name = STDIN.gets.chomp

require 'rubygems'
require 'rotten-tomatoes'

# get a movie
movie = Rotten_tomatoes::lucky_get_info movie_name

# do stuff with it
puts movie.title
puts "Released in #{movie.year}"
puts "#{movie.runtime} long"
puts "Rated #{movie.rating}"
puts "Tomatometer Freshness rating of #{movie.tomatometer}%"
puts "Average critic rating of #{movie.tomatometer_average_rating}"
puts "#{movie.tomatometer_reviews_counted} reviews taken into consideration."
puts "#{movie.tomatometer_fresh} critic/s said it was fresh."
puts "#{movie.tomatometer_rotten} critic/s said it was rotten."
puts "Audience rating of #{movie.audience_rating}% fresh."
puts "Average audience rating of #{movie.audience_average_rating}."
puts "#{movie.audience_number_of_ratings} audience ratings."
puts "Released #{movie.release}"
puts "Distributed by #{movie.distributor}"

movie.genres.each do |genre|
  puts "In the #{genre} genre."
end

movie.people.each do |role, people|
  puts "\n#{role}"
  people.each do |person|
    if person[:characters] && !person[:characters].empty?
      print "\t#{person[:characters]} portrayed by "
    else
      print "\t"
    end
    puts "#{person[:name]}"
  end
end

# Alternatively, people can be accessed by role
# like so:
# movie.cast.each do |cast_member|
#   p cast_member
# end

# movie.writers.each do |writer|
#   p writer
# end

# movie.directors.each do |director|
#   p director
# end
#
# you can also just:
# p movie.writer
# and
# p movie.director
{% endhighlight %}

For anyone interested, the [git repo is here](http://github.com/re5et/rotten-tomatoes)
