import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('jokes', function() {
    this.route('joke', {path: '/:id'});
  });
});

export default Router;
