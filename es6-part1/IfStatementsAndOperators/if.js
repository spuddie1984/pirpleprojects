/*
    Homework Assignment #3: Statements and Operators

    Details:

    Let's look at a popular logical argument (a syllogism)

    All men are mortal
    Socrates is a man.
    Therefore, socrates is mortal.

    Using "if statements" and any other logical operators and data-types you see fit,
    recreate this logical argument. Your code should make clear that "socrates"
    is part of a collection of items referred to as "men",
    and that all members of this collection are mortal.
    You should also then demonstrate that since Socrates is part of this collection,
    it follows that he is mortal as well.
*/

const men = ["Socrates", "John", "Paul", "Daniel"];
let n = 0; 
let hasSocrates = false; // So we can inform you if socrates is mortal or not !!
// lets loop through the men array and look for Socrates
for (let man = 0; man < men.length; man++){
    // we have found Socrates
    if(men[man] === "Socrates"){
        if(!hasSocrates){
            console.log("Socrates is a man, because he is part of this men array");
            hasSocrates = true;
        }
    }else if(men[man] !== "Socrates"){
        if(n < 1){// console log once only
            console.log("These people are men");
            n++;
        }
        // lets print the names of the mortal men 
        console.log("   " + men[man]);
    }
}
// Socrates isnt mortal :(
if(!hasSocrates){
    console.log("Sorry to inform you but Socrates is not a Man!!");
}

console.log("");
/*
    Extra Credit:

    Got the hang of creating a logical argument? Want to try another one? Try this one as well:

    This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.
*/

const cake = 'vanilla';
// is cake vanilla or chocolate flavoured
if(cake === "vanilla" || cake === "chocolate"){
    console.log("You have a cake flavoured chocolate or vanilla");
    if(cake !== "chocolate"){
        // its not chocolate :(
        console.log("This cake is not chocolate");
    }
    if(cake === "vanilla"){
        console.log("This cake is " + cake);
    }
} else {
    // dont have that flavoured cake sorry
    console.log("sorry the cake is neither vanilla or chocolate");
}