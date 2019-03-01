
// On Page refresh or Reload reset the login section, signup section and dashboard section to display none 
const pageRestart = () => {
    document.querySelector("#login-page").style.display = "none";
    document.querySelector("#signup-page").style.display = "none";
    document.querySelector("#dashboard-page").style.display = "none";
}

// function for start page login button
const goToLoginSection = (event) => {
    // stop page refresh on this button's click(because it's part of a form html element, it will fire a page refresh automatically)
    event.preventDefault();
    console.log("going to the login page");
    
}

// function for start page signup button
const goToSignUpSection = (event) => {
    // stop page refresh on this button's click(because it's part of a form html element, it will fire a page refresh automatically)
    event.preventDefault();
    console.log("going to the signup page");
}

// When the page is reloaded or refreshed this function will run
const startPageLoad = () => {
    pageRestart();
   
    // start page button listeners
    const startPageLoginButton = document.querySelector("#start-page-login-button").addEventListener("click", goToLoginSection);
    const startPageSignUpButton = document.querySelector("#start-page-signup-button").addEventListener("click", goToSignUpSection);

}


// page load or page refresh event listener
const pageLoad = window.addEventListener("load", startPageLoad);

