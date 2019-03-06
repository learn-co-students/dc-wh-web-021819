require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        if !word.is_a?(String)
            raise ArgumentError
        end 
        word.gsub!(/[^A-Za-z0-9]/i, '')
        if word.length <= 1
            return true
        end
        if word[0] == word[-1] 
            return is_palindrome?(word[1..-2])
        else
            return false
        end
    end

end

