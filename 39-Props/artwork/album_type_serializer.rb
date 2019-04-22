class AlbumTypeSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :albums

  def albums
    object.albums.order(release_date: :desc)
  end
end
