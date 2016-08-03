class Comment < ActiveRecord::Base
  validates :body, :user_id, :picture_id, presence: true

  belongs_to :picture
  belongs_to :user
end
