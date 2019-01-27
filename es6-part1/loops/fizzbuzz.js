/*
Homework Assignment #6: Loops

Details:

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. It is a favorite for interviewers, and a shocking number of job-applicants can't get it right.But you won't be one of those people. Here are the rules for the assignment (as specified by Imran Gory):

Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".
*/

// simple for loop check each num between 1 to 100 against the nested if statements
for(let num = 1; num <= 100; num++){
    // % modulo operator
    // modulo operator will return the remainder of the  equation
    // for instance 3 % 3 = 0 their is no remainder because 3 goes into 3 perfectly     
    if (num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    }else if(num % 3 === 0){
        console.log("Buzz");
    } else if (num % 5 === 0){
        console.log("Fizz");
    }else {
        console.log(num);
    }
}
/*
Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime".You should print this whenever you encounter a number that is prime(divisible only by itself and one).As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. It's okay for it to be slow.
*/

// simple for loop check each num between 1 to 100 against the nested if statements
// check for prime numbers as well
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 1) {
        console.log("Prime");
    } else if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Buzz");
    } else if (num % 5 === 0) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
}