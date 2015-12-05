export default function jokeGenerator(store) {
	let jokes = [];

	//joke 1
	let json = {
		id: 'set-1',
		mainPart: 'What is Bruce Lee\'s favorite drink?',
		supportingPart: 'Wataaaaah!',
		origins: [
					{author: 'Mars', originsContent: 'Every movie that Bruce Lee plays in, says this word when he punches his opponent'}, 
					{author: 'Mars', originsContent: 'He likes cats probably?'}
				]

	};
	jokes.addObject(store.createRecord('jokes/joke', json));

	//joke 2
	json = {
		id: 'set-2',
		mainPart: 'What do you call a deer with no eyes?',
		supportingPart: 'No eye deer.',
		origins: [
					{author: 'Mars', originsContent: 'In english no eye deer, sounds like no idea'}, 
					{author: 'Mars', originsContent: 'That one is easy, you don\'t need to explain it'}
				]

	};
	jokes.addObject(store.createRecord('jokes/joke', json));
	staticJokes().forEach((joke, index) => {
		joke['id'] = index;
		store.createRecord('jokes/joke', joke);
	});
	// joke 3
  	return jokes;
}

// From http://www.funny.com/cgi-bin/WebObjects/Funny.woa/wa/funny?fn=CI3NJ
function staticJokes() {
	return [{ mainPart: "Why do Farts stink?",  supportingPart: "So that Deaf people can enjoy them too."},
{ mainPart: "Why did the Hedgehog cross the road?",  supportingPart: "To see his Flat Mate."},
{ mainPart: "What do you call a Fish without an eye?",  supportingPart: "A 'Fsh'!"},
{ mainPart: "Why does it take 1 million sperm to fertilize one egg?",  supportingPart: "They won't stop to ask directions."},
{ mainPart: "What 's the difference between Big Foot and an intelligent man?",  supportingPart: "Big Foot's been spotted several times."},
{ mainPart: "What do you call a handcuffed man?",  supportingPart: "Trustworthy."},
{ mainPart: "What did the fish say when he hit a concrete wall?",  supportingPart: "Dam"},
{ mainPart: "Why is divorce so expensive?",  supportingPart: "Because it's worth it."},
{ mainPart: "What is black, white and red all over?",  supportingPart: "A skunk with nappy rash."},
{ mainPart: "Why did the man jump out of the window?",  supportingPart: "He wanted to catch a butterfly."},
{ mainPart: "Why did the monkey put a piece of steak on his head?",  supportingPart: "He thought he was a griller."},
{ mainPart: "What do you call a deer with no eyes?",  supportingPart: "No eye deer."},
{ mainPart: "What do you call a deer with no eyes and no legs?",  supportingPart: "Still no eye deer."},
{ mainPart: "Why was six afraid of seven?",  supportingPart: "Because seven eight nine."},
{ mainPart: "Why did the dinosaur walk across the road?",  supportingPart: "Because chickens were not invented yet."},
{ mainPart: "What has four wheels and flies?",  supportingPart: "A rubbish truck."},
{ mainPart: "What 's brown and sticky?",  supportingPart: "A stick."},
{ mainPart: "When were vowels invented?",  supportingPart: "When u and i were born."},
{ mainPart: "What 's orange and sounds like a parrot?",  supportingPart: "A carrot."},
{ mainPart: "What do you call a sheep with no head and legs?",  supportingPart: "A fuzz ball."},
{ mainPart: "What do you call a fairy that hasn't bathed in a year?",  supportingPart: "Stinkerbell."},
{ mainPart: "When is it a good time to eat a window?",  supportingPart: "When it's jammed."},
{ mainPart: "What s the difference between a tractor and a giraffe? A.One has hydraulics the other has highbollocks."},
{ mainPart: "What kind of band doesn't play music?",  supportingPart: "A highbred."},
{ mainPart: "If one is single and two is a couple and three is a crowd, what is four and five?",  supportingPart: "9 (5+4)"},
{ mainPart: "What do you get when you cross a parrot and a lion?",  supportingPart: "I don't know, but when it talks you'd better listen."},
{ mainPart: "Why do giraffes have long necks?",  supportingPart: "Because they have smelly feet."},
{ mainPart: "Why did the orange use suntan lotion?",  supportingPart: "He started to peel."},
{ mainPart: "Where does an elephant go when he wants to lie down?",  supportingPart: "Anywhere he pleases."},
{ mainPart: "What did the big chimney say to the little chimney?",  supportingPart: "You are too young to smoke."},
{ mainPart: "What did the fish say to the seashores?",  supportingPart: "Can I ride on you seashorse?"},
{ mainPart: "Why did Cinderella get kicked off the baseball team?",  supportingPart: "Because she ran away from the ball."},
{ mainPart: "A man went to play golf for the day. He took his golf clubs and two pairs of pants. What were the extra pants for?",  supportingPart: "In case he got a hole-in-one."},
{ mainPart: "Why didn't the skeleton cross the road?",  supportingPart: "Because it had no guts."},
{ mainPart: "I have 3 heads, 5 legs, 7 arms and 444 fingers. What am I?",  supportingPart: "A liar."},
{ mainPart: "What do you get when you cross an elephant with a kangaroo?",  supportingPart: "Holes all over Australia."},
{ mainPart: "What goes ha, ha plonk?",  supportingPart: "Someone laughing their head off."},
{ mainPart: "What do you get when you cross a duck with cheese?",  supportingPart: "Cheese and quackers."},
{ mainPart: "What monster sits on the end of your finger?",  supportingPart: "The bogie man."},
{ mainPart: "What did the computer screen say to the keyboard after it went for a ride?",  supportingPart: "That was a harddrive."},
{ mainPart: "What is a pirate's favourite letter?",  supportingPart: "R(Arrrrrggggh)"},
{ mainPart: "Why did the cow jump over the moon?",  supportingPart: "Because the farmer had cold hands."},
{ mainPart: "How  do you make a tissue dance?",  supportingPart: "Put a little boogie in it."},
{ mainPart: "How  do you get a man to stop biting his nails?",  supportingPart: "Make him wear shoes."},
{ mainPart: "Why do chicken coops have two doors?",  supportingPart: "Because if it had four doors it's be a chicken sedan."},
{ mainPart: "What is the difference between a tick and a lawyer?",  supportingPart: "A tick falls off you when you die."},
{ mainPart: "What 's the definition of mixed emotions?",  supportingPart: "When you see your mother-in-law backing off a cliff in your new car."},
{ mainPart: "What do call a lawyer with an IQ of 50?",  supportingPart: "Your Honor."},
{ mainPart: "How  do you know if a restaurant has a clown as a chef?",  supportingPart: "When the food tastes funny"}];

}