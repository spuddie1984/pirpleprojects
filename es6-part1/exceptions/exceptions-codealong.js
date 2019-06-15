// Code Along for the Exceptions Video
// Basically type in the code as you listen to the video

// try..catch lets us try code and catch the exception without the program terminating prematurely

function MyException(message) {
    this.message = message;
    this.name = "Custom exception";
    this.toString = function () { 
        return this.message + ": " + this.name;  
    }
}
// lets throw an execption
// throw new MyException("Missing data");

// try...catch statement

// try {
//     throw "Exception";
// }
// catch (e) {
//     console.log(e);
// }

// because we are catching the exception above we can execute this console.log below
// if we didnt use a try catch statement the console.log below wouldnt execute

// console.log("I want to run !!!")

// check for a number or not

let myNum = "This is not a Number";
const myErrorLog = [];
function checkIfNum(num) {
    if (isNaN(num)) {
        throw "Not a number !";
    } else {
        console.log("Yes, this is a number !!!");
    }
}

// push errors to a error log
function errorHandler(e) {
    myErrorLog.push(e);
}

// try the checkIfNum function
// try {
//     checkIfNum(myNum);
// }
// catch(errorID) {
//     errorHandler(errorID)
// }
// console.log exceptions only if they exist in the exceptions log

if(myErrorLog.length > 0) {
    myErrorLog.forEach((result) => console.log(result));
}

// stringer function constructor
function MyString(string) {
    if(typeof string === "string") {
        this.value = string;
        this.getValue = function () {
            console.log("Your string: " + this.value + "."); 
        }
    } else if(string === "boolean") {
        throw "Error!"
    } else {
        throw new StringExceptionError(string)
    }
}

// string exception
function StringExceptionError(value) {
    this.value = value;
    this.message = "must be a string";
    this.toString = function () {
        return this.value + ": " + this.message;
    }
}

// string verifier
function verifyString(s) {
    let str;
    try {
        str = new MyString(s);
    } catch(e) {
        if(e instanceof StringExceptionError) {
            console.log("String Exception: " + e);
            // this will never return if finally has already returned
            return true;
        } else {
            console.log("Other exception");
        }
        
    } finally {
        // execution of the catch statement is put on hold while the finally block runs
        // This will always run even if an exception is thrown
        always();
        return false;
    }
    return str;
}

function always() {
    console.log("I always run!!!")
}

// lets verify a string with our custom exception
const stringA = verifyString("I am a String!!");
const stringB = verifyString(true);
console.log(verifyString(true));


