
// On Page refresh or Reload reset the login section, signup section and dashboard section to display:none
// function called in the startPageLoad function 
const pageRestart = () => {

    document.querySelector("#login-page").style.display = "none";
    document.querySelector("#signup-page").style.display = "none";
    document.querySelector("#dashboard-page").style.display = "none";
}

// function for start page button listener(inside the startPageLoad function)
const signUpOrLogin = (event) => {

    // stop page refresh on this button's click(because it's part of a form html element, it will fire a page refresh automatically)
    event.preventDefault();
    
    // use the event.target to select the corresponding section on the corresponding button click
    if(event.target.id === "start-page-login-button"){
        document.querySelector("#start-page").style.display = "none";
        document.querySelector("#login-page").style.display = "block";
    }else if(event.target.id === "start-page-signup-button"){
        document.querySelector("#start-page").style.display = "none";
        document.querySelector("#signup-page").style.display = "block";
    }
}
const testUser = window.localStorage.setItem("nathan@nathancollins.net.au", "nathan@nathancollins.net.au");

// check login details exist in local storage
const loginChecker = (event) => {
    
    
    if(window.localStorage.getItem(event.querySelector("#user-email").value)){
        console.log("successfull")
    }else{
        console.log("sorry that user doesn't exist");
    }
} 

// does what it's called input validation 101
const inputValidator = (input) => {
    // email regular expression
    let emailRegEx = /\S+@\S+\.\S+/;
    // text regular expression
    let textRegEx = /[^A-z]/ ;
    
    // make sure someone has enter something ;p
    if(input.value < 1){
        return false;

    // return true if entered email passes test
    }else if(input.type === "email"){
        return emailRegEx.test(input.value);

    // return true if full valid name entered
    }else if(input.type === "text"){
        return !textRegEx.test(input.value);

    // make sure they agree with the terms and conditions
    }else if(input.type === "checkbox"){
        return input.checked;

    // if you want to add more validator arguements do so here .....
    
    // Yay !!! the form can be submitted it passed all the tests
    }else {
        return true;
    }
}

// check each input in a chosen form, check each input with the inputValidator function
const formInputElementChecker = (input) => {

    // grab all the input elements and convert into an array
    const formElements = [...input.getElementsByTagName("input")];

    // check each input for  validation if all inputs have been validated then remove error-message
    // validate each input according to conditions in the inputValidator
    if(!formElements.every(inputValidator)){

        // show error message if input isnt valid
        if(input.id === "login-form"){
            input.querySelector("#login-form-error-message").style.display = "block";
        }else if(input.id === "signup-form"){
            input.querySelector("#signup-form-error-message").style.display = "block";
        }
    }else if(formElements.every(inputValidator)){
        for(let element of formElements){
            if(element.type !== "checkbox"){
                if(element.name !== "login-email" && element.name !== "login-password" )
            }
        }
        
        // hide error message and send login details to localStorage
        if(input.id === "login-form"){
            input.querySelector("#login-form-error-message").style.display = "none";
        }else{
            input.querySelector("#signup-form-error-message").style.display = "none";
        }
    }
    // for testing purposes......
    console.log(formElements.every(inputValidator));

const loginFormFunction = function (event) {
    // every submit button click check the form input elements
    if(event.target.type === "submit"){
        // Use the formInputElementChecker to check each input for a valid input depending on input type
        formInputElementChecker(this);
    }
}

const signupFormFunction = function (event) {
    // every submit button click check the form input elements
    if(event.target.type === "submit"){
        // Use the formInputElementChecker to check each input for a valid input depending on input type
        formInputElementChecker(this);    
    }
}

const submitButton = (event) => {
    event.preventDefault();
}

// When the page is reloaded or refreshed this function will run
// function for pageLoad event listener
const startPageLoad = () => {

    // On refresh or fresh load of the page, set all the elements (except for the start-page) to display:none 
    pageRestart();
   
    // start page, login form and signup form button listener
    document.querySelector("#start-form").addEventListener("click", signUpOrLogin);
    document.querySelector("#login-form").addEventListener("click", loginFormFunction);
    document.querySelector("#signup-form").addEventListener("click", signupFormFunction);
    document.querySelector("#loginFormSubmitButton").addEventListener("click", submitButton);
    document.querySelector("#signupFormSubmitButton").addEventListener("click", submitButton);
}

// page load or page refresh event listener
const pageLoad = document.addEventListener("DOMContentLoaded", startPageLoad);