class AddUserPicDefault < ActiveRecord::Migration
  def change
    change_column_default(:users, :profile_picture_url, "https://myareecarhire.com.au/wp-content/uploads/2013/11/user_add-512.png")
  end
end
