instructors = [{name: "Lane", mood: "happy"},
               {name: "Trevor", mood: "happy"},
               {name: "Paul", mood: "cranky"}]

["Lane", "Trevor", "Paul"]

# names = []

names = instructors.map do |i|
    i[:name]
end

# print(names)

# find (detect) vs select (find_all)


# instructors.each do |i|
#     if i[:name] == "Lane"
#         found_value = i
#     end
# end

# print instructors.find do |i|
#     i[:name] == "Lane"
# end
 
# puts found_value

print instructors.select {|i| i[:mood] == "happy"}.map {|i| i[:name]}

# print happy_instructors
