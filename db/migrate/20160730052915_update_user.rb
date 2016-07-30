class UpdateUser < ActiveRecord::Migration
  def change
    add_column :users, :blog_title, :string
    add_column :users, :blog_description, :string
    add_column :users, :profile_image_url, :string, defaults: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462228620/anonymous_bij7md.png"
  end
end
