import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  profile: Ember.inject.service('profile'),
});
