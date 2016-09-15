# Blendr

[Live Site][live]
[live]: http://www.blendr.herokuapp.com

Blendr is an Instagram-Inspired full stack web application that utilizes Ruby on Rails backend, a PostgreSQL database and React.js with Flux Architecture front-end.

## Features & Implementation

### Single Page with RESTful Architecture

Blendr is a Single Page web application app that is projected through a single static page. Data flows from Rails API to a separate node app with Flux and React.js.
Data is fetched via actions and dispatched via dispatchers which will update applicable stores and in turn update elements as the state of the application changes.  Thanks to the use of a
'virtual DOM', this process is just as fast as isolating the changing element.


### Posts, Follows, Comments and Likes

Users have the ability to create post, like posts, leave comments on posts and follow other users. Upon creation of a post, not only will the authors profile feed update with the post but every user that is following the post author will see the authors post in their post feed. Every
post also has like and comment functionality which will trigger an action which will trigger an Ajax request to update backend database and update associated tables accordingly via Active Record which will also trigger a
re-rendering of applicable components on the front end.

[general-view]: ./app/assets/images/feed-view.png
![general-view]

### Creating Posts

Users are able to create new posts through the use of the Cloudinary upload widget. Post Image URL'S returned from the Cloudinary upload widget will be saved on the backend as well as in the PostStore.

[post-creation-view]: ./app/assets/images/cloudinary-view.png
![post-creation-view]


### Viewing Profile Posts

Users can view other users posts via their profile. Clicking on a post in the profile view will trigger a modal to open and display details of a post which includes
comments, current viewers like status on a post and current users follow status of profile owner.


[profile-view]: ./app/assets/images/profile-view.png
![profile-view]

[modal-view]: ./app/assets/images/modal-view.png
![modal-view]
