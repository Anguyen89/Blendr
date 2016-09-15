class Picture < ActiveRecord::Base
  validates :url, :user_id, presence: true

  belongs_to :user

  has_many :following,
    through: :user,
    source: :following_ids

  has_many :followers,
    through: :user,
    source: :followed_ids

  has_many :likes, dependent: :destroy

  has_many :comments, dependent: :destroy
end
