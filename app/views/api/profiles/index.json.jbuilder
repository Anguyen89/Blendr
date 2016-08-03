json.array! @profiles do |profile|
  json.content_url profile.content_url
  json.title profile.title
  json.author_id profile.author_id
end

# will need to see if there is a more efficient way to get a specific users profile info
