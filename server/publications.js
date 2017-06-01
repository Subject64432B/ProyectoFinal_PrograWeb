Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});

/* Publicar los datos a los que el cliente actual puede tener acceso
Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});*/
