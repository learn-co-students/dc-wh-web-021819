## What would each of these methods return?

awesome_characters = ["buffy", "willow", "xander"]

def capitalize_with_each(arr)
    upper_case = []
    arr.each do |character|
        upper_case << character.upcase
    end
    return arr
end

def capitalize_with_map(arr)
    arr.map do |char|
        char.upcase
    end
    return arr
end

print capitalize_with_each(awesome_characters)
print "\n\n"
print capitalize_with_map(awesome_characters)
print "\n\n"