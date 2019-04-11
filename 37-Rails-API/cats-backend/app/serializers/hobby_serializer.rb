class HobbySerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  # has_many :cats
end
