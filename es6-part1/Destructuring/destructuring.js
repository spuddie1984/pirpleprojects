// What is the differences between destructuring an object and destructuring an array?
// - Array items can be named virtually anything(apart from keywords of course)
// - Object keys need to match(same spelling including capitalization) corresponding destructuring variables
// 

// Destructuring is an easier and more succint way of grabbing or reassigning values
// within an array or object.  Have a look at the examples of the old ES5 Way and the newer ES6 Way

// ES5 Way
var arr = [ 1,"stuff","more stuff" ];

var item1 = arr[0];
var item2 = arr[1];
var item3 = arr[2];

console.log( "ES5 Way: ",item1,item2,item3 );

// This is how you destructure an array in ES6
const arrDestructured = [ 2, "destructuring", "destructured" ];
// alot more succint variable assigns(compare with ES5 syntax)
const [ item4, item5, item6 ] = arrDestructured;

console.log( `ES6 Way: ${item4} ${item5} ${item6}` );

// ES5 Way
var obj = {
    firstName : "John",
    lastName : "Smith",
    Age : 40,
    Nationality : "English"
};

var fName = obj.firstName;
var lName = obj.lastName;
var age = obj.Age;
var nationality = obj.Nationality;


const obj1 = {
    a : "Jane",
    b : "Doe",
    c : 35,
    d : "Canadian"
};

// we can also assign new names to each variable
// the new variable name then doesnt have to match the object keys name
// This is how you destructure an object in ES6
const { a : herFirstName, b : herLastName, c : herAge, d: herNationality } = obj1;

// this is correct
console.log( `How to destructure an object in ES6: ${herFirstName} ${herLastName} ${herAge} ${herNationality}` );

// When would each be appropriate too use? 

// for Arrays we can use destructuring for plain old arrays and for looping through array of objects

// We arent destructuring arrays in this example
// but we are using a for loop with destructuring of the objects within each array item 
// for example...

const plainOldArr = ["Ken","Sophie","John","Rebekah","Jasmine","Micheal"];

const arrLooper = ([name1,name2,name3,name4,...otherNames]) => {
    function stringer(input){
        return input;
    }
    const [name5,name6] = stringer(otherNames);
    console.log(`All these employees ${name1},${name2},${name3},${name4} are excellent Employees.  The others ${name5} and ${name6} are terrible employees!`);  
}

arrLooper(plainOldArr);

// lets add some nested arrays and nested objects yah..yah
const plainOldNestedArr = [
    ["soccer","football","kayaking","hunting"],
    ["cooking","baking","shopping","socializing"],
    ["playing","crying","imagining","relaxing"]
];

// more readable able to understand what the coder is trying to do
// 3 different nested arrays for 3 different types of people...men,women,children
// destructuring makes it easier to read 
const [men,women,children] = plainOldNestedArr;

console.log(`Men's hobbies include ${men}. 
Whereas Women like to do ${women}. 
Well children love ${children}`);
    
const arrOfObj = [{
    a: "Esperance",
    b: {
        a: "Western Australia",
        b: "Australia",
        c: 12000
    }
},{
    a: "Bendigo",
    b: {
        a: "Victoria",
        b: "Australia",
        c: 140000
    } 
},{
    a: "Albany",
    b: {
        a: "Western Australia",
        b: "Australia",
        c: 33000
    }
}]

for( let { a:Town,b:{a:State,b:Country} } of arrOfObj ){
    console.log( `${Town} is one of my Favourite Towns
This Town is located in ${State}, ${Country}
` );
}

// or we can use destructuring to assign multiple return values of a function
// For example....

const randomFunction = (anArray) => {
    return anArray;
}

// assign a variable to each array element via destructuring
const [ value1,value2,value3 ] = randomFunction( arr );
// randomFunction output
console.log( "Values from randomFunction: ",value1,value2,value3 );

// Another Example
function sumOfArrays(...arrArgs){
    let arrays = [];
    const reducer = (accum,currentValue) => accum + currentValue;
    for(let arr of arrArgs){
       arrays.push(arr.reduce(reducer));             
    }
    return arrays;
}
// great way of returning more then one return value, its short and sweet
const [sum1,sum2] = sumOfArrays([1,2,3,4],[4,5,6,7]);
console.log(`The sum of Array 1 is ${sum1}, and the sum of array 2 is ${sum2}`);

// Or we can use object destructuring to provide as a functions arguements
// if the key's name is obscure we can rename it like below
function propGrabber( {name:firstName,nationality} ){
    return `This person is ${nationality} his name is ${firstName}`;
}

console.log( propGrabber( {name:"Bob",nationality:"American"} ) );