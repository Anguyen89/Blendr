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
  {username: "truari", password: "password", name: "TruW", profile_picture_url: "https://hd.unsplash.com/photo-1463453091185-61582044d556"},
  {username: "oprah", password: "password", name: "Oprah", profile_picture_url: "http://thinklink.in/wp-content/uploads/oprahwinfrey.jpg"},
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
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997309/photo-1473912869254-939dd24ddb2f_nrtx88.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997291/photo-1473922363279-30e2b2c96bb8_flwti3.jpg",
    user_id: 10},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997275/photo-1473923377535-0002805f57e8_zdlw8f.jpg",
    user_id: 9},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997259/photo-1473938718606-f15cdc613d96_hy0d5w.jpg",
    user_id: 8},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997237/photo-1473951574080-01fe45ec8643_znanuq.jpg",
    user_id: 7},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997220/photo-1473952434042-a59f293c13f5_wo8sxu.jpg",
    user_id: 6},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997204/photo-1473952684829-3f32eac62cc0_vbbvca.jpg",
    user_id: 5},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997188/photo-1473960716392-f07749249b58_vjkzzr.jpg",
    user_id: 4},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997172/photo-1473962193327-3adedb4a9dc8_prtwwv.jpg",
    user_id: 3},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997157/photo-1473966037935-d9a269fb46c1_dukl7i.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473998931/photo-1473889803946-6a3923603697_kemsar.jpg",
    user_id: 2},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997127/photo-1473966968600-fa801b869a1a_emqfk1.jpg",
    user_id: 2},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997112/photo-1473968217939-ab9d99b2eacb_ns0ufn.jpg",
    user_id: 12},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997098/photo-1473968512647-3e447244af8f_fycwxd.jpg",
    user_id: 8},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997077/photo-1473969631237-f466cf342b1f_tvgj2b.jpg",
    user_id: 9},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997054/photo-1473970010983-8609e6525adc_bt3dni.jpg",
    user_id: 10},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997041/photo-1473970367503-7d7f8d1bf998_k1znc4.jpg",
    user_id: 4},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473997026/photo-1473973266408-ed4e27abdd47_xpzn4v.jpg",
    user_id: 5},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996999/photo-1473976146995-f638c6604f76_urea0x.jpg",
    user_id: 6},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996984/photo-1473976345543-9ffc928e648d_ljntrp.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996963/photo-1473979035852-33bef4c1a8bd_o2yh9s.jpg",
    user_id: 2},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996942/photo-1460388052839-a52677720738_gumfma.jpg",
    user_id: 3},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996924/photo-1461301214746-1e109215d6d3_turagh.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996909/photo-1463334535327-f9009ae62bf7_iaojbt.jpg",
    user_id: 2},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996890/photo-1465281508053-aee07fc08957_eyosnt.jpg",
    user_id: 3},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996872/photo-1468852747768-9d51ceb4422d_xpuzwy.jpg",
    user_id: 4},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996849/photo-1469826834904-e92950ee5bf9_zftbpl.jpg",
    user_id: 5},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473996831/photo-1470897655254-05feb2d2ab97_v3k8qz.jpg",
    user_id: 6},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999936/photo-1473776338307-9072ece139a6_elsq6s.jpg",
    user_id: 7},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999915/photo-1473782563012-3b56e7bf2bd5_e5ijpi.jpg",
    user_id: 8},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999892/photo-1473798349978-d18a8c8dbf41_entlxm.jpg",
    user_id: 9},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999858/photo-1473805776446-12df95e07592_tswndu.jpg",
    user_id: 10},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999839/photo-1473830394358-91588751b241_qei4nh.jpg",
    user_id: 11},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999808/photo-1473840006118-40134d87792d_c0ra1k.jpg",
    user_id: 12},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999794/photo-1473849512542-60ddc51e1c9f_xcrzuw.jpg",
    user_id: 12},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999778/photo-1473861863133-25c53fa573cd_xfsncf.jpg",
    user_id: 11},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999764/photo-1473864629323-4388dbd27a78_mhprth.jpg",
    user_id: 10},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999741/photo-1473865857576-6551cdb55013_ip7cyq.jpg",
    user_id: 9},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999726/photo-1473869227402-05ef157f1117_z59j2r.jpg",
    user_id: 8},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999712/photo-1473869308043-446f96cbe314_qmqwrh.jpg",
    user_id: 7},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999675/photo-1473873446975-123c5143248b_qytd6e.jpg",
    user_id: 6},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999644/photo-1473881823110-d94cac66318a_x1xaaa.jpg",
    user_id: 5},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999630/photo-1473883436997-f937958fae93_awmi1i.jpg",
    user_id: 4},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999614/photo-1473886041811-de35bd962210_pkub03.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999602/photo-1473886324175-35847eec4fab_wrzly9.jpg",
    user_id: 1},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999586/photo-1473888521894-71087ae107e9_uqtab0.jpg",
    user_id: 3},
    {url: "http://res.cloudinary.com/dkieltxya/image/upload/c_scale,w_976/v1473999564/photo-1473889051109-2de98686f4c2_zethk1.jpg",
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
