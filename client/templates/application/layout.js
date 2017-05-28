/* Ejemplo modificacíon de sesión
Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});*/

/*Ejemplo reactividad: Configuración de una computación
Meteor.startup(function() {
  Tracker.autorun(function() {
    console.log('There are ' + Posts.find().count() + ' posts');
  });
});
*/
