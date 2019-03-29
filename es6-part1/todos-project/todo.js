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

// on user settings button click show user settings box(div)
const userSettings = (event) => {
    const userSettings = document.querySelector(".user-settings-div");    
    userSettings.classList.add("user-settings-display-toggle"); 
}

// grab the currently logged in user details and display them in the user settings box(div)
const userSettingsFunction = (details) => {
    
    const getUserInfo = JSON.parse(localStorage.getItem(details.email));
    document.querySelector("#first-name-change").value = getUserInfo.firstName;
    document.querySelector("#last-name-change").value = getUserInfo.lastName;
    document.querySelector("#password-change").value = getUserInfo.password;
    
    // return for later use
    return getUserInfo;
}
 
// show users password when a user clicks and holds the mouse button
const showPassword = (event) => {
    const pswdInput = document.querySelector("#password-change");
    if(pswdInput.type === "password"){
        pswdInput.type = "text";
    }else {
        pswdInput.type = "password";
    }
}

// on the close button click close the user settings box(div)
const closeUserSettings = () => {
    document.querySelector(".user-settings-div").classList.remove("user-settings-display-toggle");
    document.querySelector("#user-details-success").style.display = "none";
}

// exactly like it sounds log the user out
const userSignOut = () => {
    
    // basically reload the page so that the start page is shown
    pageRestart();
}

// show a new todo on every loggin users dashboard page
function newTodo (event){
    this.querySelector("#new-todo-button").style.display = "none";
    this.querySelector("#todo-list-title-input").style.display = "flex";
}

// when enter is clicked move on to the next input
function enterNewTodo(keyboardEvent) { 
    if(keyboardEvent.keyCode === 13){
        this.style.display = "none";
        document.querySelector("#todo-list-title").innerHTML = this.value;
        document.querySelector("#todo-list-title").style.display = "block";
    }
    
}

// for list modification purposes
const usersLists = (lists) => {

}


// show the dashboard with a new todo list
const loggedIn = (user) => {
    // oh glorious dashboard
    document.querySelector("#dashboard-page").style.display = "block";
    
    // lets grab the currently logged in users details
    // for further use in the settings box(div), and beyond....
    const currentlyLoggedInUserDetails = userSettingsFunction(user);

    // grab the email of the current user this is used to identify the person logged in
    const currentlyLoggedInUser = user.email;
    console.log(currentlyLoggedInUser);

    // user details callback
    function editUserDetails(event) {
        // check for button click
        if(event.target.id === "submit-user-detail-changes"){
            
            // validate input data and pass current user details
            // to validation function so we can update that users details after validation
            formInputElementChecker(this,currentlyLoggedInUserDetails);
        }else if(event.target.id === "delete-user-button"){
            localStorage.removeItem(currentlyLoggedInUser);
            pageRestart();
            
        }
    }
    // possibly move all these listeners to the main page load func
    document.querySelector("#user-settings-button").addEventListener("click", userSettings);
    document.querySelector(".user-settings-div").addEventListener("click", editUserDetails);
    document.querySelector("#user-signout").addEventListener("click", userSignOut);
    document.querySelector(".new-todo").addEventListener("click", newTodo);
    document.querySelector(".user-settings-close-button").addEventListener("click", closeUserSettings);
    document.querySelector("#todo-list-title-input").addEventListener("keydown", enterNewTodo);
    document.querySelector("#show-password-button").addEventListener("click", showPassword);
    // could attach this event listener's function to the submit button function for the
    //  main login and signup forms but for modularity reasons i will leave it hear
    // (try to keep all the related code together, for easier reading :) ) 
    
}


////////////////////////////////////////////////////////////////////////////////


////////////////////////////////// VALIDATION //////////////////////////////////


// check each input in a chosen form, check each input with the inputValidator function
const formInputElementChecker = (input,loggedInUser) => {

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
        }else if(input.id === "user-settings"){
            input.querySelector("#user-details-error-message").style.display = "block";
        }
    }else if(formElements.every(inputValidator)){
       
        // hide error message and send login details to localStorage
        if(input.id === "login-form"){
            input.querySelector("#login-form-error-message").style.display = "none";
        }else if(input.id === "signup-form"){
            input.querySelector("#signup-form-error-message").style.display = "none";
        }else if(input.id === "user-settings"){
            input.querySelector("#user-details-error-message").style.display = "none";
        }

        // lets get or set the inputted details
        localStorageCheckerSetter(input,loggedInUser);
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
    if(input.type !== "password" && input.value < 1){
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
const localStorageCheckerSetter = (elements, loggedInUser) => {
    
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

    if(elements.id !== "login-form" && elements.id !== "user-settings"){
        // make sure that user doesnt already exist
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
            // that user already exists
            document.querySelector("#user-exists-error-message").style.display = "block";
        }
    }else if(elements.id === "login-form"){
        // lets log in
        existingUser.email = elements.querySelector("#user-email").value;
        existingUser.password = elements.querySelector("#user-password").value;
        // check to see if that user exists in localstorage
        if(localStorage.getItem(existingUser.email) === null){
            // if user doesnt exist show error message and reset form inputs
            document.querySelector("#login-form").reset();
            elements.querySelector("#user-doesnt-exist-error-message").style.display = "block";
            // if user exists  in localStorage then go to the dashboard
        }else{
            elements.querySelector("#user-doesnt-exist-error-message").style.display = "none";
            document.querySelector("#login-page").style.display = "none";
            document.querySelector("#login-form").reset();

            // need to check password here
            // consider having a password hasher here
            // lets go to the dashboard
            loggedIn(existingUser);             
        }

    }else if(elements.id === "user-settings"){
        
        // use an object literal and fill it with the users details to be sent to localStorage
        const updateUserDetails = {};
        updateUserDetails.firstName = elements.querySelector("#first-name-change").value;
        updateUserDetails.lastName = elements.querySelector("#last-name-change").value;
        
        
        // make the if statements shorter
        const newPassword = elements.querySelector("#new-password");
        const reEnteredPsd = elements.querySelector("#re-entered-password");
        
        // check to see if user has attempted a password change
        if(newPassword.value.length > 1 || reEnteredPsd.value.length > 1){
            
            // make sure the user enters the desired password with a password recheck
            if(newPassword.value !== reEnteredPsd.value){
                elements.querySelector("#new-password-error-message").style.display = "block";

            // all is good so send the new password and details to localStorage 
            }else if(newPassword.value === reEnteredPsd.value){
                

                elements.querySelector("#new-password-error-message").style.display = "none";
                
                // update users password in the localStorage object
                updateUserDetails.password = newPassword.value;

                // dont forgot the update the password that is displayed in user settings 
                elements.querySelector("#password-change").value = newPassword.value;

                // after successfully updating the users password clear the new password inputs
                newPassword.value = "";
                reEnteredPsd.value = "";

                // localStorage only accepts strings so need to stringify the object
                localStorage.setItem(loggedInUser.email, JSON.stringify(updateUserDetails));
            
                // lets the user know that the details have been saved successfully
                document.querySelector("#user-details-success").style.display = "block";
            }

        }else {

            // grab the data from the user details inputs and write that to the localStorage 
            // then update the form with the new details       
            
            // lets the user know that the details have been saved successfully
            document.querySelector("#user-details-success").style.display = "block";

            // localStorage only accepts strings so need to stringify the object
            localStorage.setItem(loggedInUser.email, JSON.stringify(updateUserDetails));

            // for testing purposes...
            console.log(localStorage.getItem(loggedInUser.email));
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