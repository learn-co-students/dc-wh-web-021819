class Snack < ApplicationRecord
    belongs_to :retailer
    has_many :favorites
    has_many :users, through: :favorites
    # types of the inputs
    # snack name is a string
    # ~ handled for us by rails
    # might not do the thing we want
    # conversions without raising errors...

    # snack name has to be not empty
    # expect - see in tests, not in validations
    # validates :name_of_column, :what_to_check
    validates :name, presence: true
    validates :name, length: { maximum: 250 }
    # snack names are less than 250 characters

    # deliciousness in the proper range (1-10)
    # deliciousness has a value
    # _types_ of calories and deliciousness
    # calories is not empty
    # calories in the proper range (0-10000)
    # store id is an integer, store exists
    # year_established is not in the future
    # thin mints deliciousness > 100

    # run this validation
    validate :thin_mints_deliciousness


    def thin_mints_deliciousness
      if name == "Thin Mints" && deliciousness < 1000
        errors.add(:deliciousness, "Thin mints are amazing, you heathen")
      end
    end


end
