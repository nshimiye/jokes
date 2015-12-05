import Ember from 'ember';
import jokeGenerator from 'jokes/utils/joke-generator';
export default Ember.Route.extend({
	beforeModel(){
		let jokes = this.store.peekAll('jokes/joke');
		if(Ember.isEmpty(jokes)){
			// generate dummy jokes
			jokeGenerator(this.store);
		}
	}
});
