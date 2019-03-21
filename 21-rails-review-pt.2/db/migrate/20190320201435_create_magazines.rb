class CreateMagazines < ActiveRecord::Migration[5.2]
  def change
    create_table :magazines do |t|
      t.string :title
      t.string :category
      t.integer :price
      t.integer :store_id

      t.timestamps
    end
  end
end
