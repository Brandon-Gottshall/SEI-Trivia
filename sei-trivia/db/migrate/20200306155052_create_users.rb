class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.integer :cohort_id
      t.string :profile_img_url
      t.string :first_name
      t.string :last_name
      t.string :role
      t.boolean :access

      t.timestamps
    end
  end
end
