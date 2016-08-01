# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  username: 'MichaelJordan',
  blog_title: '6 Rings',
  blog_description: 'GOAT',
  password_digest: BCrypt::Password.create('ilovebulls'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://www.chicagonow.com/through-an-irishmans-eyes/files/2013/05/Michael-Jordan.jpg"
)
User.create(
  username: 'KB24',
  blog_title: 'Black Mamba',
  blog_description: 'Hoops and business',
  password_digest: BCrypt::Password.create('lakersforever'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "https://az616578.vo.msecnd.net/files/2016/05/02/635977562108560005-679443365_kobe.jpg"
)
User.create(
  username: 'BigAristotle',
  blog_title: 'Shaq Photography',
  password_digest: BCrypt::Password.create('aperture'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://www.zillow.com/blog/files/2008/06/shaq1.png"
)
User.create(
  username: 'essiesh',
  blog_title: 'cats and more cats',
  blog_description: 'essie, she/her, chicago. a lot of cats and coffee.',
  password_digest: BCrypt::Password.create('aviously'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229746/7057493203_04039ff722_q_ffbl2j.jpg"
)
User.create(
  username: 'urbansketching',
  blog_title: 'Urban Sketching',
  blog_description: 'sketches done in any medium on-location, submitted by artists around the world',
  password_digest: BCrypt::Password.create('microns4life'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://ia.media-imdb.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_UX214_CR0,0,214,317_AL_.jpg"
)
User.create(
  username: 'medium-design',
  blog_title: 'Medium Design',
  blog_description: 'minimalist design studio located in calgary',
  password_digest: BCrypt::Password.create('sominimal'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://i.huffpost.com/gen/1660901/images/o-IHEART-facebook.jpg"
)
User.create(
  username: 'househunter',
  blog_title: 'Homes Galore',
  blog_description: 'beautiful and inspiring homes around the globe',
  password_digest: BCrypt::Password.create('househunters'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/2159727/0424006001455987199_filepicker.png"
)
User.create(
  username: 'doubleu',
  blog_title: 'Double U',
  blog_description: 'Creative center\'s in New York',
  password_digest: BCrypt::Password.create('artsandcrafts'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://vignette1.wikia.nocookie.net/disney/images/8/82/Waltdisney4.jpg/revision/latest?cb=20110930222635"
)
User.create(
  username: 'planergoods',
  blog_title: 'planer goods',
  blog_description: 'custom wooden goods from a studio in lansing, mi',
  password_digest: BCrypt::Password.create('woodchips'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://blog.eszteranddavid.com/wp-content/uploads/2013/06/Atlas_Framing_Woodwork_Shot_3-114-copy1.jpg"
)
User.create(
  username: 'streetwares',
  blog_title: 'STREETWARES',
  blog_description: 'urban. fashion. photography.',
  password_digest: BCrypt::Password.create('quashie'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://img.ulximg.com/image/300x300/artist/1392767355_2048795ba3f4dc991a1fc473b51f1d8b.jpg/aaf8bc7f6eab3f73df8d833d2c07308c/1392767355_kanye_west_46.jpg"
)
User.create(
  username: 'guest',
  blog_title: 'Guest User',
  blog_description: 'just here stumbling upon cool blogs',
  password_digest: BCrypt::Password.create('guestlogin'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "https://cdn4.iconfinder.com/data/icons/flat-icon-set/2133/flat_icons-graficheria.it-13.png"
)
Post.create!(
  post_type: "link",
  title: "Chani Nicholas: Horoscopes for April 25",
  content_url: 'https://cdn4.iconfinder.com/data/icons/flat-icon-set/2133/flat_icons-graficheria.it-13.png',
  author_id: 4
)

Post.create(
post_type: "photo",
body: 'Perith, United Kingdom',
content_url: "https://cdn4.iconfinder.com/data/icons/flat-icon-set/2133/flat_icons-graficheria.it-13.png",
author_id: 7
)
