#!/usr/bin/env ruby

require 'json'

input_filename = ARGV[0]

data = []
start_time = nil
end_time = nil
index = nil

start_sec = nil
end_sec = nil
full_line = ""

words = []

def stamp_to_secs timestamp
  milli = timestamp.split(",")[1]
  hms = timestamp.split(",")[0].split(":")
  sec = (hms[0].to_i * 60 * 60) + (hms[1].to_i * 60) + (hms[2].to_i)
  sec = sec.to_f + ".#{milli}".to_f
  sec
end

File.open(input_filename,'r').each_line do |line|
  line = line.chomp
  if line.length == 0
    next
  elsif line =~ /^(\d+)$/
    if !end_sec
      next
    end
    # entry = {"index" => index, "start_time" => start_time, "end_time" => end_time, "text" => line}
    # data.push entry
    diff_sec = end_sec - start_sec
    line_words = full_line.split(" ")
    each_word_time = diff_sec / line_words.length.to_f
    cur_sec = start_sec
    line_words.each do |word|
      is_um = word[0] == "%" ? 1 : 0
      word = word.gsub("%","")
      words.push([word, cur_sec, is_um])
      cur_sec += each_word_time
    end
    full_line = ""
    index = $1
  elsif line =~ /^([\d:,]+) --> ([\d:,]+)$/
    start_time = $1
    end_time = $2
    start_sec = stamp_to_secs(start_time)
    end_sec = stamp_to_secs(end_time)
  else
    full_line += " " + line
  end
end

# puts data.to_json
words.each do |word|
  puts "\"#{word[0]}\"\t#{word[1]}\t#{word[2]}"
end


