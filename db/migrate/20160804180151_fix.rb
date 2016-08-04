class Fix < ActiveRecord::Migration
  def change
    remove_column :users, :picture_url
    remove_column :users,  :profile_picture_id
  end
end
