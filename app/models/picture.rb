class Picture < ActiveRecord::Base
  validates :url, :user_id, presence: true

  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
end