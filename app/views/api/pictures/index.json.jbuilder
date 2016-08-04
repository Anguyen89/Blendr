json.array! @pictures do |picture|
  time_in_seconds = (Time.now.to_i - Time.at(picture.created_at).to_i)
  time_in_minutes = time_in_seconds / 60
  time_in_hours = time_in_minutes / 60
  time_in_days = time_in_hours / 24
  time_in_weeks = time_in_days / 7

  time = time_in_seconds.to_s + "s"
  time = time_in_minutes.to_s + "m" if time_in_seconds >= 60
  time = time_in_hours.to_s + "h" if time_in_minutes >= 60
  time = time_in_days.to_s + "d" if time_in_hours >= 24
  time = time_in_weeks.to_s + "w" if time_in_days >= 7

  json.id picture.id
  json.url picture.url
  json.user_id picture.user_id
  json.name picture.user.name
  json.username picture.user.username
  json.user picture.user
  json.created_time_ago time

  json.comments picture.comments do |comment|
    json.id comment.id
    json.user_id comment.user_id
    json.user comment.user.username
    json.body comment.body
end

json.likes picture.likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.user like.user.username
  json.picture_id  like.picture_id
end

end
