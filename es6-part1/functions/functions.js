/*
Homework Assignment #4: Functions

Details:

Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.


Extra Credit:

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.

*/

//  return true if mortal, return false if immortal
const menArray = (men, ...randomInputs) => {
    console.log("Is this man Mortal ?????");
    // stop any capitalization erros with toLowerCase()
    return men.toLowerCase() !== "socrates"; 
}
console.log(menArray("Socrates","another", 1, 10));
//  add a space to the console
console.log("");

// if the cake is chocolate return the chocolate flavour else return vanilla
const cakes = (flavours, isChocolate) => {
   if( !Array.isArray(flavours)){
        console.log("please enter an array of flavours ... ['chocolate', 'vanilla', 'strawberry']");
   }
//    run a function on each array item check to see what flavour it is 
   const flavourings = flavours.filter(element => {
    if(isChocolate){
        return element.toLowerCase() === "chocolate";
    }else if (!isChocolate){
        return element.toLowerCase() !== "chocolate";
    }       
});
    // make sure to return a string :)
   return flavourings.toString();
}
console.log(cakes(['vanilla', 'chocolate'], false));