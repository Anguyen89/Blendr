json.id @picture.id
json.url @picture.url
json.user_id @picture.user_id
json.user @picture.user


json.comments @picture.comments do |comment|
  json.id comment.id
  json.user_id comment.user_id
  json.user comment.user.username
  json.body comment.body
end

json.likes @picture.likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.user like.user.username
  json.picture_id  like.picture_id
end
