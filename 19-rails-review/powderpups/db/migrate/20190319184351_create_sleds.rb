class CreateSleds < ActiveRecord::Migration[5.0]
  def change
    create_table :sleds do |t|
      t.string :name

      t.timestamps
    end
  end
end
