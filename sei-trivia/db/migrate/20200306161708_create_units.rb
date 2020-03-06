class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.integer :cohort_id
      t.string :name
      t.boolean :display

      t.timestamps
    end
  end
end
