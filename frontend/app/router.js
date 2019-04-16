import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
  });

  this.route('la-croix', function() {
    this.route('new');
  });

  this.route('la-croix-flavors', function() {
    this.route('new');
  });
});

export default Router;
