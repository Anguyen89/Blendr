# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!([
  {username: "M_Thorton", password: "password", name: "Mark Thorton", profile_picture_url: "https://hd.unsplash.com/photo-1445282804813-123ac28fe498"},
  {username: "guest", password: "password", name: "Guest", profile_picture_url: "http://res.cloudinary.com/dkieltxya/image/upload/v1473880308/or8vyvwkwmtpzcnrdrxe.jpg"},
  {username: "j_priuq", password: "password", name: "Jennifer Proque", profile_picture_url: "https://hd.unsplash.com/photo-1432601866219-29141ada44f9"},
  {username: "truari", password: "password", name: "Gavin Newsom", profile_picture_url: "https://hd.unsplash.com/photo-1463453091185-61582044d556"},
  {username: "oprah", password: "password", name: "Oprah Winfrey", profile_picture_url: "http://thinklink.in/wp-content/uploads/oprahwinfrey.jpg"},
  {username: "WillF", password: "password", name: "Will Ferrel", profile_picture_url: "https://pbs.twimg.com/media/By0GBdCCcAABJ7V.jpg"},
  {username: "Wilma", password: "password", name: "Wilma Felder", profile_picture_url: "http://res.cloudinary.com/dkieltxya/image/upload/v1473710385/article-0-1C91BEE700000578-336_306x393_g7ddaw.jpg"},
  {username: "Jay E.", password: "password", name: "Jay", profile_picture_url: "http://res.cloudinary.com/dkieltxya/image/upload/v1473710348/recent-and-random-portraits_8_p4oooy.jpg"},
  {username: "Ali89", password: "password", name: "Ali R.", profile_picture_url: "http://res.cloudinary.com/dkieltxya/image/upload/v1473710327/BduTxWnIUAAKT_5_y7xowg.jpg"},
  {username: "Jose_Lopez", password: "password", name: "Jose Lopez",  profile_picture_url: "https://hd.unsplash.com/photo-1454046931706-e0f055de21d8"},
  {username: "Matt_j", password: "password", name: "Matt Jensen",  profile_picture_url: "https://hd.unsplash.com/photo-1469026140142-cb239ea68152"},
  {username: "gerbs22", password: "password", name: "Jean Gerber",  profile_picture_url: "https://hd.unsplash.com/photo-1443381301867-5a36ffaafc42"}
])

def rand_id
  rand(1..12)
end

comments = Comment.create!([
  {user_id: rand_id, picture_id: 44, body: "Wow. that is an awesome pic"},
  {user_id: 1, picture_id: 44, body: "Where is this???"},
  {user_id: 1, picture_id: 43, body: "COOOOLLLLL!!"},
  {user_id: rand_id, picture_id: 43, body: "I was just there the other week. Beautiful pic!!"},
  {user_id: rand_id, picture_id: 43, body: "TFTI :("},
  {user_id: rand_id, picture_id: 42, body: "Very nice. You are a great photographer"},
  {user_id: rand_id, picture_id: 42, body: "nice!!!"},
  {user_id: rand_id, picture_id: 41, body: "beautiful"},
  {user_id: rand_id, picture_id: 41, body: "Lets go again next week to take some pics... Just got a new camera"},
  {user_id: rand_id, picture_id: 41, body: "great picture.."},
  {user_id: rand_id, picture_id: 40, body: "Did you take that on a cannon?"},
  {user_id: rand_id, picture_id: 40, body: "ok ok pretty awesome"},
  {user_id: rand_id, picture_id: 40, body: "BOOM! "},
  {user_id: rand_id, picture_id: 39, body: "wow that image is so professional"},
  {user_id: rand_id, picture_id: 37, body: "Where was this???"},
  {user_id: rand_id, picture_id: 36, body: "very interesting how you took this pic.. But I like it alot"},
  {user_id: 7, picture_id: 35, body: "I'm too old for this.."},
  {user_id: rand_id, picture_id: 35, body: "Ha! Very funny"},
  {user_id: rand_id, picture_id: 35, body: "I can't believe he said that"},
  {user_id: 8, picture_id: 36, body: "Can you teach me to take pics?"},
  {user_id: 6, picture_id: 34, body: "I'll be back"},
  {user_id: 7, picture_id: 34, body: "smh..."},
  {user_id: 3, picture_id: 33, body: "Squeaky clean!"},
  {user_id: rand_id, picture_id: 33, body: "NOICE...."},
  {user_id: rand_id, picture_id: 1, body: "woaahhhhh"},
  {user_id: rand_id, picture_id: 1, body: "SO cool!!!"},
  {user_id: rand_id, picture_id: 1, body: "Where was that?"},
  {user_id: rand_id, picture_id: 10, body: "When did you become a pro photographer??"},
  {user_id: rand_id, picture_id: 10, body: "For real, What ^^ said.."},
  {user_id: rand_id, picture_id: 10, body: "Yea, great pic man."},
  {user_id: rand_id, picture_id: 20, body: "Nice as it gets..."},
  {user_id: rand_id, picture_id: 20, body: "Yes it is"},
  {user_id: rand_id, picture_id: 20, body: "Droolll..."},
  {user_id: rand_id, picture_id: 23, body: "Badabing badaboom"},
  {user_id: rand_id, picture_id: 23, body: "???"},
  {user_id: rand_id, picture_id: 23, body: "hahahahah"},
  {user_id: rand_id, picture_id: 11, body: "ok ok ok"},
  {user_id: rand_id, picture_id: 11, body: "LOL OMG"},
  {user_id: rand_id, picture_id: 20, body: "You can call me a dreamer.."},
  {user_id: rand_id, picture_id: 20, body: "I guess im a dream."},
  {user_id: 8, picture_id: 24, body: "wow man. Really cool"},
  {user_id: 6, picture_id: 24, body: "Really!?!?"},
  {user_id: rand_id, picture_id: 45, body: "Dude, is that in NY??"},
  {user_id: rand_id, picture_id: 45, body: "wowowowowowowo"},
  {user_id: rand_id, picture_id: 45, body: "If that is in NY, lets go next week"},
  {user_id: 1, picture_id: 47, body: "Hey, that's pretty nice"},
  {user_id: 1, picture_id: 47, body: "Actually, very very very very nice"},
  {user_id: rand_id, picture_id: 47, body: "I third"},
  {user_id: 1, picture_id: 46, body: "HELLO HELLOW HELLOWW"},
  {user_id: 1, picture_id: 45, body: "COOOLLLio"},
  ])


posts = Picture.create!([
  {url: "https://hd.unsplash.com/photo-1469719847081-4757697d117a",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1467521335787-2f0fc0f0e9a0",
  user_id: 10},
  {url: "https://hd.unsplash.com/photo-1466837838619-c8f5b8f0c166",
  user_id: 9},
  {url: "https://hd.unsplash.com/photo-1457365050282-c53d772ef8b2",
  user_id: 8},
  {url: "https://hd.unsplash.com/photo-1467321638755-7246fd0dc1f3",
  user_id: 7},
  {url: "https://hd.unsplash.com/photo-1465479423260-c4afc24172c6",
  user_id: 6},
  {url: "https://hd.unsplash.com/photo-1462524500090-89443873e2b4",
  user_id: 5},
  {url: "https://hd.unsplash.com/photo-1451188214936-ec16af5ca155",
  user_id: 4},
  {url: "https://hd.unsplash.com/photo-1468476775582-6bede20f356f",
  user_id: 3},
  {url: "https://hd.unsplash.com/photo-1468245856972-a0333f3f8293",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1466046690866-98181611563d",
  user_id: 2},
  {url: "https://hd.unsplash.com/photo-1465284958051-1353268c077d",
  user_id: 11},
  {url: "https://hd.unsplash.com/photo-1465232377925-cce9a9d87843",
  user_id: 12},
  {url: "https://hd.unsplash.com/photo-1464740042629-b78a46b310ae",
  user_id: 8},
  {url: "https://hd.unsplash.com/photo-1464695110811-dcf3903dc2f4",
  user_id: 9},
  {url: "https://hd.unsplash.com/photo-1451479456262-b94f205059be",
  user_id: 10},
  {url: "https://hd.unsplash.com/photo-1467348733814-f93fc480bec6",
  user_id: 4},
  {url: "https://hd.unsplash.com/photo-1467173572719-f14b9fb86e5f",
  user_id: 5},
  {url: "https://hd.unsplash.com/photo-1466721591366-2d5fba72006d",
  user_id: 6},
  {url: "https://hd.unsplash.com/photo-1466154714956-9f5f64682fcc",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1461295025362-7547f63dbaea",
  user_id: 2},
  {url: "https://hd.unsplash.com/photo-1460400408855-36abd76648b9",
  user_id: 3},
  {url: "https://hd.unsplash.com/reserve/Lt0DwxdqRKSQkX7439ey_Chaz_fisheye-11.jpg",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1464822759023-fed622ff2c3b",
  user_id: 2},
  {url: "https://hd.unsplash.com/photo-1464621922360-27f3bf0eca75",
  user_id: 3},
  {url: "https://hd.unsplash.com/photo-1458571037713-913d8b481dc6",
  user_id: 4},
  {url: "https://hd.unsplash.com/photo-1452711932549-e7ea7f129399",
  user_id: 5},
  {url: "https://hd.unsplash.com/photo-1465152251391-e94453ee3f5a",
  user_id: 6},
  {url: "https://hd.unsplash.com/photo-1464400694175-33544b41703d",
  user_id: 7},
  {url: "https://hd.unsplash.com/photo-1462910211773-a9847b1f0e40",
  user_id: 8},
  {url: "https://hd.unsplash.com/photo-1462146449396-2d7d4ba877d7",
  user_id: 9},
  {url: "https://hd.unsplash.com/photo-1464013778555-8e723c2f01f8",
  user_id: 10},
  {url: "https://hd.unsplash.com/photo-1463412855783-af97e375664b",
  user_id: 11},
  {url: "https://hd.unsplash.com/photo-1461770354136-8f58567b617a",
  user_id: 12},
  {url: "https://hd.unsplash.com/photo-1458668383970-8ddd3927deed",
  user_id: 12},
  {url: "https://hd.unsplash.com/photo-1463123081488-789f998ac9c4",
  user_id: 11},
  {url: "https://hd.unsplash.com/photo-1462733441571-9312d0b53818",
  user_id: 10},
  {url: "https://hd.unsplash.com/photo-1462331940025-496dfbfc7564",
  user_id: 9},
  {url: "https://hd.unsplash.com/photo-1461360370896-922624d12aa1",
  user_id: 8},
  {url: "https://hd.unsplash.com/photo-1457144759132-40d119c2f120",
  user_id: 7},
  {url: "https://hd.unsplash.com/photo-1452473767141-7c6086eacf42",
  user_id: 6},
  {url: "https://hd.unsplash.com/photo-1434434319959-1f886517e1fe",
  user_id: 5},
  {url: "https://hd.unsplash.com/photo-1440613905118-99b921706b5c",
  user_id: 4},
  {url: "https://hd.unsplash.com/photo-1457685373807-8c4d8be4c560",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1432637194732-34cedd856522",
  user_id: 1},
  {url: "https://hd.unsplash.com/photo-1416169607655-0c2b3ce2e1cc",
  user_id: 3},
  {url: "https://hd.unsplash.com/photo-1460899960812-f6ee1ecaf117",
  user_id: 2}
])




(1..User.all.length).each do |follower_id|
  #say each user follows between 7 and 10 people
  total_following = rand(2..3)

  users = (1..User.all.length).to_a - [follower_id]

  total_following.times do
    followed_id = users.shuffle!.pop
    Relationship.create({follower_id: follower_id, followed_id: followed_id})
  end
end

(1..User.all.length).each do |user_id|
  #say each user likes 20 posts
  picture_ids = (1..Picture.all.length).to_a
  20.times do
    picture_id = picture_ids.shuffle!.pop
    Like.create!({user_id: user_id, picture_id: picture_ids.shuffle!.pop})
  end
end
