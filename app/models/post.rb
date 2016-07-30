class Post < ActiveRecord::Base
  validates :type, :author_id, presence: true
  validate :title, if: :body_and_content_null?
  validate :content, if: :title_and_body_null?
  validate :body, if: :content_and_title_null?

  belongs_to :author,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User


  def body_and_content_null?
    return true unless body || content_url
    false
  end

  def title_and_body_null?
    return true unless title || body
    false
  end

  def content_and_title_null?
    return true unless content_url || title
    false
  end


  end
