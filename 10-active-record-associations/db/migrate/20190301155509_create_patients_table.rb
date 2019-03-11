class CreatePatientsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |table|
        table.string :name
    end
  end
end
