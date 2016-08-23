class FixUserPicDefault < ActiveRecord::Migration
  def change
    change_column_default(:users, :profile_picture_url, "https://image.freepik.com/free-icon/user-male-silhouette_318-55563.png")
  end
end
