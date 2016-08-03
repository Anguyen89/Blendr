class Like < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :picture_id }

  belongs_to :user
  belongs_to :picture
end
