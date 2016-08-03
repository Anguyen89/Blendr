class AddPicUrl < ActiveRecord::Migration
  def change

    add_column :users, :picture_url, :string
  end
end
