import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.peekAll('jokes/joke');
	},
	setupController(controller, model) {
		this._super(...arguments);
		controller.set('displayedJoke', model.get('firstObject'));
		controller.set('count', 0);
		controller.set('routeName', 'jokes.joke');
	},
	actions: {

		moveBackAndForth(routeName, id) {
			if(routeName === 'jokes'){
				this.controller.set('routeName', 'jokes.joke');
				this.transitionTo(routeName);

			}else {
				this.controller.set('routeName', 'jokes');
				this.transitionTo(routeName, this.store.peekRecord('jokes/joke', id));
			}
		},
		goToRoute(routeName, id) {
			if(routeName && id){
				this.transitionTo(routeName, this.store.peekRecord('jokes/joke', id));
			}else {
				this.transitionTo(routeName);
			}
		},
		displayNext(shuffleType) {
			// do the randomization needed 
			// find next joke and set to displayed param
			let count = this.controller.get('count');
			let model = this.controller.get('model');
			let nextJoke = this.controller.get('displayedJoke');
			if(model.get('length') > count) {
				if(!model.objectAt(count+1)){
					count = -1;
				}
				// console.log(model.objectAt(count+1).get('mainPart'));
				nextJoke = model.objectAt(count + 1);
				this.controller.set('count', count + 1);

			}

			this.controller.set('displayedJoke', nextJoke);
			// make sure we are in the correct route
			this.send("moveBackAndForth", "jokes");
		}
	}
});
