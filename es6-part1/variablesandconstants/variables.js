/*

What are the differences between let, const and var ?

Let lets you(no pun intended) scope a variable to a block of code
for instance you would use it like this :
*/
	function randomFunction () {
		if (!true) {// <-- between this curly brace 
			let test = 1;
		}// <-- and this curly brace is called a block of code
		console.log(test);
	}
	
randomFunction();
/*
if we tried to access the variable test outside of the scope of the block we 
	would run into an error

*/