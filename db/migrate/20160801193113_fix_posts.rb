class FixPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :content_url
    add_column :posts, :content_url, :string
  end
end
