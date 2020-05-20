/*
	What are the differences between let, const and var ?
	Lets have a look at a couple examples of var variable usage

	Variable Hoisting

	tl;dr
	The Variable declaration is hoisted to the top of its scope
	Javascript only hoists declarations not initializations.
	let and const are not hoisted in javascript

*/
	test1 = 'global';
	
	/* 
		the variable declaration, test2 is hoisted to the top of its scope (functional scope)
		therefore the console.log() works as intended
	*/
	function randomFunction1(){
		test2 = 'functional';
		console.log(test2);  // 'functional'
		var test2;
	}
	randomFunction1();  

	/* 
		even though test1 hasnt been declared it still runs, 
		this is because the variable declaration is hoisted to the top of its scope
		(global scope)
	*/
	console.log(test1); // 'global'
	var test1; // test1 is hoisted to the top of the scope, no error is thrown.
	
	/*
		Let lets you(no pun intended) scope a variable to a block of code
		It's called "block scope"
		for instance you would use it like this :
	*/
	
	function randomFunction2() {
		if (true) {// <-- between this curly brace 
			let test = 1;
			var testAgain = 2;
		}// <-- and this curly brace is block scope
		// console.log(test); // doesnt work not in the same (block) scope
		console.log(testAgain);  // this one works, its not as fussy ;)
	}
	randomFunction2();

	/*
		if we tried to access the 'let' variable test outside of the scope of the block we 
		would run into an error. However if the variable is defined as a 'var' variable then no problems
		I hear you say what about 'const' what is that ? 
		Const is not much different from let, it inherits the same block scoping rules as let.
		The only difference is that Const cannot be reassigned primitive values.  Lets have a look at an example
	*/

	const doesntChange = 'wont change';
	// doesntChange = 1;  // This throws an error
	
	// We can 
	const anArray = [1,2,3,4,5];
	// lets add to the array
	anArray.push(6);
	console.log(anArray); // [1,2,3,4,5,6]
	// lets remove an array item
	anArray.pop();
	console.log(anArray); // [1,2,3,4,5]

