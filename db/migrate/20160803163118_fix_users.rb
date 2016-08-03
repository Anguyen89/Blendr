class FixUsers < ActiveRecord::Migration
  def change
    remove_column :users, :blog_title
    remove_column :users, :blog_description
    remove_column :users, :profile_image_url
    add_column :users, :profile_picture_id, :integer
  end
end
