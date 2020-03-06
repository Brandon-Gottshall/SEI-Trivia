class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :category_id
      t.string :prompt
      t.string :ans_1
      t.string :ans_2
      t.string :ans_3
      t.string :ans_4
      t.integer :correct_ans

      t.timestamps
    end
  end
end
