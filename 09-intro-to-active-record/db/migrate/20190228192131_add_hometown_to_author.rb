class AddHometownToAuthor < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :hometown, :string
  end
end
