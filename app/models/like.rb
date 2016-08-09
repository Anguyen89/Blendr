class Like < ActiveRecord::Base
  validates :user_id, :picture_id, presence: true

  belongs_to :user
  belongs_to :picture
end
