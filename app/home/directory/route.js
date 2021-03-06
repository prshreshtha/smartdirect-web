import Ember from 'ember';
import AuthenticatedRouteMixin from '../../mixins/authenticated-route-mixin';

const {
  Route,
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: 'login',

  setupController(controller) {
    this._super(...arguments);
    controller._clearSelectedDirOrFiles();
  },
});
