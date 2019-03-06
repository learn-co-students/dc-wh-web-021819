require_relative "../palindrome.rb"

describe "PalindromeChecker" do
    
    let (:checker) {PalindromeChecker.new}

    it "returns true when the input is 'racecar'" do
        expect(checker.is_palindrome?('racecar')).to be(true)
    end

    it "returns false when the input is 'cucumber' " do 
        expect(checker.is_palindrome?('cucumber')).to be(false)
    end

    it "treats capital and lowercase letters as distinct" do 
        expect(checker.is_palindrome?('Madam')).to be(false)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?('egad a base tone denotes a bad age')).to be(true)
    end

    it "raises an error if argument is not a string" do
        expect{checker.is_palindrome?(7).to raise_error ArgumentError}
    end

    it "ignores punctuation" do 
        expect(checker.is_palindrome?("go hang a salami i'm a lasagna hog")).to be(true)
    end
end