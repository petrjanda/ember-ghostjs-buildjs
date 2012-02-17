register('mainView', function() {
App.MainView = Ember.View.extend({
  templateName: 'main'
})
});

register('main', function() {
require('core');
require('mainView');

var view = App.MainView.create();
view.append();
});

register('core', function() {
window.App = Ember.Application.create();
});

