Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});

/* Publicar los datos a los que el cliente actual puede tener acceso
Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});*/
