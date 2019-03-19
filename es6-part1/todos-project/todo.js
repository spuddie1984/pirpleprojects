////////////////////////////////// GENERAL //////////////////////////////////
// On Page refresh or Reload reset the login section, 
// signup section and dashboard section to display:none
// function called in the startPageLoad function 
const pageRestart = () => {

    document.querySelector("#start-page").style.display = "block";
    document.querySelector("#login-page").style.display = "none";
    document.querySelector("#signup-page").style.display = "none";
    document.querySelector("#dashboard-page").style.display = "none";
    document.querySelector("#user-exists-error-message").style.display = "none";

}

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////// DASHBOARD //////////////////////////////////


const userSettings = (event) => {
    const userSettings = document.querySelector(".user-settings-div");    
    userSettings.classList.add("user-settings-display-toggle");
}

const closeUserSettings = (event) => {
    document.querySelector(".user-settings-div").classList.remove("user-settings-display-toggle");
}

// sign out on signout button click
const userSignOut = () => {
    
    // basically reload the page so that the start page is shown
    pageRestart();
}


function newTodo (event){
    this.querySelector("#new-todo-button").style.display = "none";
    this.querySelector("#todo-list-title").style.display = "flex";
}

function enterNewTodo(keyboardEvent) {
    if(keyboardEvent.keyCode === 13){
        console.log(keyboardEvent);
        this.value = "";
    }
    
}

const usersLists = (lists) => {

}


// show the dashboard with a new todo list
const loggedIn = (user) => {
    // oh glorious dashboard
    document.querySelector("#dashboard-page").style.display = "block";
    // if a user has lists show them in the dashboard
    usersLists(user);

    // possibly move all these listeners to the main page load func
    document.querySelector("#user-settings-button").addEventListener("click", userSettings);
    document.querySelector("#user-signout").addEventListener("click", userSignOut);
    document.querySelector(".new-todo").addEventListener("click", newTodo);
    document.querySelector(".user-settings-close-button").addEventListener("click", closeUserSettings);
    document.querySelector("#todo-list-title").addEventListener("keydown", enterNewTodo);
}


///////////////////////////////////////////////////////////////////////////////

////////////////////////////////// VALIDATION //////////////////////////////////


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
       
        // hide error message and send login details to localStorage
        if(input.id === "login-form"){
            input.querySelector("#login-form-error-message").style.display = "none";
        }else{
            input.querySelector("#signup-form-error-message").style.display = "none";
        }

        // lets get or set the inputted details
        localStorageCheckerSetter(input);
    }
              
    // for testing purposes......
    console.log(formElements.every(inputValidator));
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


// for retrieving user data and for setting user data into localStorage 
const localStorageCheckerSetter = (elements) => {
    
    // new user data object
    const newUser = {
        "firstName" : "",
        "lastName"  : "",
        "email"     : "",
        "password"  : "",
    };

    // existing user data object
    const existingUser = {
        "email"    : "",
        "password" : "",
    };

    if(elements.id !== "login-form"){
        if(localStorage.getItem(elements.querySelector("#user-signup-email").value) === null){
            
            // put new users details into a object to stringify
            newUser.firstName = elements.querySelector("#first-name").value;
            newUser.lastName = elements.querySelector("#last-name").value;
            newUser.email = elements.querySelector("#user-signup-email").value;
            newUser.password = elements.querySelector("#user-signup-password").value;
            
            // add the new user to localStorage and hide the signup form
            localStorage.setItem(newUser.email, JSON.stringify(newUser));
            document.querySelector("#signup-page").style.display = "none";
            document.querySelector("#signup-form").reset();
            // Lets go to the dashboard
            loggedIn(newUser);
            
        }else{
            document.querySelector("#user-exists-error-message").style.display = "block";
        }
    }else if(elements.id === "login-form"){
        existingUser.email = elements.querySelector("#user-email").value;
        existingUser.password = elements.querySelector("#user-password").value;
        if(localStorage.getItem(existingUser.email) === null){
            document.querySelector("#login-form").reset();
            elements.querySelector("#user-doesnt-exist-error-message").style.display = "block";
            
        }else{
            elements.querySelector("#user-doesnt-exist-error-message").style.display = "none";
            document.querySelector("#login-page").style.display = "none";

            // need to check password here
            // consider having a password hasher here
            loggedIn(existingUser);
            
            
        }

    }
}




////////////////////////////////// START PAGE //////////////////////////////////

// START PAGE FORM CALLBACK
// function for start page button listener(inside the startPageLoad function)
const signUpOrLogin = (event) => {

    // stop page refresh on this button's click(because it's part of a form html element
    // it will fire a page refresh automatically)
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



// SIGNUP FORM AND LOGIN FORM BUTTON EVENT LISTENER CALLBACKS
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


// START PAGE EVENT LISTENERS AND MISC 

// stop default action on form button submit press
const submitButton = (event) => {
    event.preventDefault();
}

// When the page is reloaded or refreshed this function will run
// function for pageLoad event listener
const startPageLoad = () => {

    // On refresh or fresh load of the page, set all the elements
    // (except for the start-page) to display:none 
    pageRestart();
   
    // start page, login form and signup form button listener
    document.querySelector("#start-form").addEventListener("click", signUpOrLogin);
    document.querySelector("#login-form").addEventListener("click", loginFormFunction);
    document.querySelector("#signup-form").addEventListener("click", signupFormFunction);
    document.querySelector("#loginFormSubmitButton").addEventListener("click", submitButton);
    document.querySelector("#signupFormSubmitButton").addEventListener("click", submitButton);
}

// page load or page refresh event listener
document.addEventListener("DOMContentLoaded", startPageLoad);

//////////////////////////////////////////////////////////////////////////////