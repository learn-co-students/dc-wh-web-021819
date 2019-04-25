class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :image, :fluffiness
  has_many :hobbies
end
