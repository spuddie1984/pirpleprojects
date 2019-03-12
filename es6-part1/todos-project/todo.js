
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

// function to validate any user inputs for errors
const inputValidator = function(input, context,signupForm = false) {
    // email regular expression
    let emailRegEx = /\S+@\S+\.\S+/;
    // text regular expression
    let textRegEx = /[^A-z]/ ;
    console.log(input.type);
    if(!signupForm){
        
        // check for an input value
        if(input.type === "email"){
            if(input.value.length < 1){
                context.querySelector("#invalid-email-error-message").style.display = "block";

             // check if email contains invalid characters
            }else if(!emailRegEx.test(input.value)){
                 console.log("email invalid, please enter a valid email address");
                 context.querySelector("#invalid-email-error-message").style.display = "block";
            }else{
                 context.querySelector("#invalid-email-error-message").style.display = "none";

            }    
        }else if(input.type === "password"){
            // check localStorage for a match for username and password
        }
    }else if(signupForm){
        // check text boxes first
        if(input.id === "first-name"){
            if(input.value.length < 1){
                context.querySelector("#first-name-error-message").style.display = "block";     
            }else if(textRegEx.test(input.value)){
                context.querySelector("#first-name-error-message").style.display = "block";   
            }else if(!textRegEx.test(input.value)){
                context.querySelector("#first-name-error-message").style.display = "none";
            }
        }else if(input.id === "last-name"){
            if(input.value.length < 1){
                context.querySelector("#last-name-error-message").style.display = "block";     
            }else if(textRegEx.test(input.value)){
                context.querySelector("#last-name-error-message").style.display = "block";   
            }else if(!textRegEx.test(input.value)){
                context.querySelector("#last-name-error-message").style.display = "none";
            }    

        // now check email inputs
        }else if(input.type === "email"){
            if(!emailRegEx.test(input.value)){
                context.querySelector("#email-error-message").style.display = "block";   
            }else if(emailRegEx.test(input.value)){
                context.querySelector("#email-error-message").style.display = "none";
            }

        // now check password inputs
        }else if(input.type === "password"){

            console.log("password");
            if(input.value.length < 1){
                context.querySelector("#password-error-message").style.display = "block";    
            }else if(input.value.length > 1){
                context.querySelector("#password-error-message").style.display = "none";
            }
        // last of all, check the checkbox :P
        }else if(input.type === "checkbox"){
            if(!context.querySelector("#terms-checkbox").checked){
                context.querySelector("#terms-error-message").style.display = "block";
            }else{
                context.querySelector("#terms-error-message").style.display = "none";
                
            }    
        }
    }
}

// check each input for  validation if all inputs have been validated then remove error-message

// check each input in a chosen form, send individual inputs to the input validator for validation and error checking
const formInputElementChecker = (input) => {
    const inputList = input.getElementsByTagName("input");
    for(let inputs = 0; inputs < inputList.length ; inputs++){
        // // inputChecker(inputList[inputs],inputList[inputs].type);
        if(input.id === "signup-form"){
            inputValidator(inputList[inputs], input, true);
        }else if(input.id === "login-form"){
            inputValidator(inputList[inputs], input);
        }
        
    }
}

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


