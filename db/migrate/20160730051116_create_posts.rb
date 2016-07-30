class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :type, null: false, index: true
      t.string :title
      t.text :body
      t.integer :content_url
      t.string :post_type
      t.datetime :created_at
      t.datetime :updated_at
      t.integer :author_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
