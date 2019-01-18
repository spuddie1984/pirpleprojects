/*
 * this is a Homework Assignment for the Data Types section of es6 part1
 * What is Required ?
 * Think of your favourite Song
 *
 * My Favourite Song is
 *
 * Andy Warhol by band Little Birdy
 *
 * My Favourite Album is Big Big Love
 *
 */

// lets define some variables
const band = "Little Birdy";
const leadSinger = "Katy Steele";
const haveBandMembers = true;
const howManyMembers = 5;
const typeOfMusic = "Indie Rock";
const singles = ["Beautiful to Me","Tonight's the Night","Excited","Come On Come On","Bodies","After Dark","Summarize","Hairdo","Stay Wild"];
const origin = {
	City:"Perth",
	Country:"Australia",
	State:"Western Australia", 
};
const albumsReleased = ["Big Big Love", "Confetti", "Hollywood"];
const isCurrentlyActive = true;

// Lets play with some string concatenation


let littleBirdy = "My Favourite band is " + band + ".  Their lead Singer is " + leadSinger + ".";
console.log(littleBirdy);

// lets concatenate to the littleBirdy string to add some more info

littleBirdy += " They have released " + singles.length + " singles.  My favourite is " + singles[2] + "."; 
console.log(littleBirdy);

console.log("Little Birdy come from the city of " + origin.City + " which is in " + origin.State + ".");
