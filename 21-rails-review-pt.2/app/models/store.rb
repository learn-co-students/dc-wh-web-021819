class Store < ApplicationRecord
  has_many :magazines
  has_many :authors, through: :magazines
  accepts_nested_attributes_for :magazines

  # magazines_attributes
  # magazines_attributes=
end
