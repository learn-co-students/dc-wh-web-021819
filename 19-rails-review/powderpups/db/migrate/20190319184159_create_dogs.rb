class CreateDogs < ActiveRecord::Migration[5.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.integer :sled_id

      t.timestamps
    end
  end
end
