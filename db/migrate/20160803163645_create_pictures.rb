class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :url, null: false
      t.integer :user_id, null: false
      t.string :public_id

      t.timestamps null: false
    end
    change_column :users, :profile_picture_id, :string
  end
end
