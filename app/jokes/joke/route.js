import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.peekRecord('jokes/joke', params.id);
	},
	setupController(controller, model) {
		this._super(...arguments);
		controller.set('displayedJoke', model);
		controller.set('newOrigin', '');
	},
	actions: {
		saveNewOrigin(joke, newOrigin) {
			console.log(arguments);
			this.controller.set('newOrigin', undefined);
		}
	}
});
