// $(function() {});
// $ -> jQuery
// () argument(s)


// function askQuestions
function askQuestions() {


	// create variables
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	if(firstName === 'General') {
		if (lastName !== 'Assembly') {
			console.log('Hi General ' + lastName + ' :)');
		}
	}
	console.log(fullName)

	// Favourite colour prompt
	var colours = ['red','green','yellow','blue'];
	var favColour = prompt('What is your favourite colour?').toLowerCase();
	for (i = 0; i < colours.length; i++) {
		if (colours[i] === favColour) {
		$('h1').css('color', favColour);
	}
	}


	var age = prompt('How old are you?');
	age = parseInt(age)
	console.log(age);

	if (age >= 18) {
		console.log ('User is an adult.');
	} else if (age >= 13) {
		console.log('User is a teenager.');
	} else {
		window.alert('User is a child.');
	}


}


// When the page has loaded
$(function () {

	// call askQuestions function
	$('img').on('click', askQuestions);

	// When the user clicks an h3 element
	$('h3').on('click', function() {

		// Toggle the next element
		$(this).next().slideToggle();
	});

});