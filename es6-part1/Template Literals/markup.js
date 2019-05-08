/* A few things that are unique to this project
 * There are no name values in any of the form inputs
 * (not really neccessary for this project because we are using local storage)
 *   
 */

// create a script element so that we can load the main js file when we choose to
const script = document.createElement("script");
script.src = "todo.js";

// Start Page Markup and Details
// Have also included the class and id names to be loaded by javascript
const stPgData = {
    "id"          : "start-page",
    "title"       : "The Todo Application",
    "Description" : "Please Login or Signup so that you can start making a TODO list or add/modify an existing one."
}
const stPgDataForm = {
    "id"       : "start-form",
    "buttons"  : [{
        "class" : "custom-button-styles",
        "id"    : "start-page-login-button",
        "text"  : "Login",
    },
    {
        "class" : "custom-button-styles",
        "id"    : "start-page-signup-button",
        "text"  : "SignUp",
    }]
}

// Template for Start Page
const startPageTemplate = `
    <!-- START PAGE SECTION -->
    <div id="${stPgData.id}">
        
        <h1>${stPgData.title}</h1>
        <p>${stPgData.Description}</p>
        
        <form id="${stPgDataForm.id}">
            <button class="${stPgDataForm.buttons[0].class}" id="${stPgDataForm.buttons[0].id}">${stPgDataForm.buttons[0].text}</button>
            <button class="${stPgDataForm.buttons[1].class}" id="${stPgDataForm.buttons[1].id}">${stPgDataForm.buttons[1].text}</button>
        </form>

    </div>
`;

// Login Page and Details
const lgnPgData = {
    "id"   : "login-page",
}

// Login Form 
const lgnPgDataForm = {
    "id" : "login-form",
    "inputs" : [{
        "type"        : "email",
        "placeholder" : "Email Address",
        "id"          : "user-email"
    },
    {
        "type"        : "password",
        "placeholder" : "Password",
        "id"          : "user-password"
    }],
    "err-msg" : [{
        "id"   : "invalid-email-error-message",
        "text" : "Please Enter a valid email Address"
    },{
        "id"   : "user-doesnt-exist-error-message",
        "text" : "Sorry that user doesn't exist in our database, please signup !"
    },{
        "id"   : "wrong-password-error-message",
        "text" : "Wrong Password !!!"
    },{
        "id"   : "login-form-error-message",
        "text" : "Please fill in all the fields"
    }],
    "buttons" : [{
        "type"  : "submit",
        "class" : "custom-button-styles",
        "id"    : "login-form-submit-button",
        "text"  : "Login"
    }]
}

// Template for Login Page
const loginPageTemplate = `
    <!-- LOGIN PAGE SECTION -->
    <div id="${lgnPgData.id}">
        <!-- There are no name value's for simplicity reasons -->
        <!-- Login Form -->
        <form id="${lgnPgDataForm.id}">

            <div id="${lgnPgDataForm["err-msg"][0].id}">${lgnPgDataForm["err-msg"][0].text}</div>
            
            <!-- Email Input -->
            <input type="${lgnPgDataForm.inputs[0].type}" placeholder="${lgnPgDataForm.inputs[0].placeholder}" id="${lgnPgDataForm.inputs[0].id}">

            <!-- Password Input -->
            <input type="${lgnPgDataForm.inputs[1].type}" placeholder="${lgnPgDataForm.inputs[1].placeholder}" id="${lgnPgDataForm.inputs[1].id}">

            <div id="${lgnPgDataForm["err-msg"][1].id}">${lgnPgDataForm["err-msg"][1].text}</div>
            <div id="${lgnPgDataForm["err-msg"][2].id}">${lgnPgDataForm["err-msg"][2].text}</div>
            <div id="${lgnPgDataForm["err-msg"][3].id}">${lgnPgDataForm["err-msg"][3].text}</div>

            <button type="${lgnPgDataForm.buttons[0].type}" class="${lgnPgDataForm.buttons[0].class}" id="${lgnPgDataForm.buttons[0].id}">${lgnPgDataForm.buttons[0].text}</button>

        </form>

    </div>
`;

// Signup Page and Details
const sgnUpPgData = {
    "id"   : "signup-page",
}

const sgnUpPgDataForm = {
    "id" : "signup-form",
    "inputs" : [{
        "type"        : "text",
        "placeholder" : "First Name",
        "id"          : "first-name"
    },{
        "type"        : "text",
        "placeholder" : "Last Name",
        "id"          : "last-name"
    },{
        "type"        : "email",
        "placeholder" : "Email Address",
        "id"          : "user-signup-email"
    },{
        "type"        : "password",
        "placeholder" : "Password",
        "id"          : "user-signup-password"
    },{
        "type" : "checkbox",
        "id"   : "terms-checkbox"
    }],
    "err-msg" : [{
        "id"   : "first-name-error-message",
        "text" : "First Name Please"
    },{
        "id"   : "last-name-error-message",
        "text" : "Last Name Please"
    },{
        "id"   : "email-error-message",
        "text" : "Valid Email Please"
    },{
        "id"   : "password-error-message",
        "text" : "Password Please"
    },{
        "id"   : "terms-error-message",
        "text" : "Please click the terms box"
    },{
        "id"   : "signup-form-error-message",
        "text" : "Please fill out all the details"
    },{
        "id"   : "user-exists-error-message",
        "text" : "Sorry that users email already exists, please use a different one"
    }],
    "terms-sec" : {
        "id"  : "terms",
        "ipt" : {
            "type" : "checkbox",
            "id"   : "terms-checkbox"
        },
        "spn" : {
            "id"   : "terms-of-use",
            "text" : "I Agree to the Terms of Use"
        }
    },
    "buttons" : [{
        "type"  : "submit",
        "class" : "custom-button-styles",
        "id"    : "signupFormSubmitButton",
        "text"  : "Signup"
    }]
};

// Template for Signup Page
const signupPageTemplate = `
    <!-- Signup Form Section -->
    <div id="${sgnUpPgData.id}">
        <!-- There are no name value's for simplicity reasons -->
        <!-- signup form -->
        <form id="${sgnUpPgDataForm.id}">

            <div id="${sgnUpPgDataForm["err-msg"][0].id}">${sgnUpPgDataForm["err-msg"][0].text}</div>

            <!-- new users first name -->
            <input type="${sgnUpPgDataForm.inputs[0].type}" placeholder="${sgnUpPgDataForm.inputs[0].placeholder}" id="${sgnUpPgDataForm.inputs[0].id}">

            <div id="${sgnUpPgDataForm["err-msg"][1].id}">${sgnUpPgDataForm["err-msg"][1].text}</div>

            <!-- new users last name -->
            <input type="${sgnUpPgDataForm.inputs[1].type}" placeholder="${sgnUpPgDataForm.inputs[1].placeholder}" id="${sgnUpPgDataForm.inputs[1].id}">

            <div id="${sgnUpPgDataForm["err-msg"][2].id}">${sgnUpPgDataForm["err-msg"][1].text}</div>

            <!-- new users email address -->
            <input type="${sgnUpPgDataForm.inputs[2].type}" placeholder="${sgnUpPgDataForm.inputs[2].placeholder}" id="${sgnUpPgDataForm.inputs[2].id}">

            <div id="${sgnUpPgDataForm["err-msg"][3].id}">${sgnUpPgDataForm["err-msg"][3].text}</div>

            <!-- new users password -->
            <input type="${sgnUpPgDataForm.inputs[3].type}" placeholder="${sgnUpPgDataForm.inputs[3].placeholder}"  id="${sgnUpPgDataForm.inputs[3].id}">
                
            <div id="${sgnUpPgDataForm["err-msg"][4].id}">${sgnUpPgDataForm["err-msg"][4].text}</div>

            <!-- agree to terms checkbox -->
            <label id="${sgnUpPgDataForm["terms-sec"].id}">
                <input type="${sgnUpPgDataForm["terms-sec"].ipt.type}" id="${sgnUpPgDataForm["terms-sec"].ipt.id}">
                <span id="${sgnUpPgDataForm["terms-sec"].spn.id}">${sgnUpPgDataForm["terms-sec"].spn.text}</span>
            </label> 

            <div id="${sgnUpPgDataForm["err-msg"][5].id}">${sgnUpPgDataForm["err-msg"][5].text}</div>
            <div id="${sgnUpPgDataForm["err-msg"][6].id}">${sgnUpPgDataForm["err-msg"][6].text}</div>

            <!-- a button to submit all the data -->
            <button class="${sgnUpPgDataForm.buttons[0].class}" id="${sgnUpPgDataForm.buttons[0].id}" type="${sgnUpPgDataForm.buttons[0].type}">${sgnUpPgDataForm.buttons[0].text}</button>
    
        </form>
    
    </div>
`;

// Dashboard Page and Details
const dhbdPgData = {
    "id"  : "dashboard-page",
    "nav" : {
        "class"   : "nav-menu",
        "buttons" : [{
            "class" : ["alt-button-style", "nav-menu-buttons"],
            "id"    : "new-todo-button",
            "text"  : "<i class='fas fa-plus fa-2x'></i>"
        },{
            "class" : ["alt-button-style", "nav-menu-buttons"],
            "id"    : "user-settings-button",
            "text"  : "<i class='fas fa-sliders-h fa-lg'></i>"
        },{
            "class" : ["alt-button-style", "nav-menu-buttons"],
            "id"    : "user-signout",
            "text"  : "<i class='fas fa-sign-out-alt fa-lg'></i>"
        }],
    } 
}

const dhbdPgUsrSet = {
    "id"      : "user-settings",
    "class"   : "user-settings-div",
    "buttons" : [{
        "class" : "user-settings-close-button",
        "text"  : "<i class='fas fa-times fa-3x'></i>"
    },{
        "class" : ["custom-button-styles", "change-details-button"],
        "id"    : "submit-user-detail-changes",
        "text"  : "Save"
    },{
        "class" : ["custom-button-styles", "delete-account-button"],
        "id"    : "delete-user-button",
        "text"  : "Delete Account"
    }],
    "h2"      : "User Settings",
    "msg"       : [{
        "id"   : "changes-reminder",
        "text" : "After selecting and changing any details please press the save button for the changes to be saved"
    },{
        "id"   : "delete-button-message",
        "text" : "If you press this button all account details including lists will be deleted !!"
    },{
        "id"   : "user-details-success",
        "text" : "Your details were successfully saved"
    }],
    "err-msg" : [{
        "id"   : "user-details-error-message",
        "text" : "Only a valid name or email please !!"
    },{
        "id"   : "new-password-error-message",
        "text" : "Your Password doesn't match"
    }],
    "usr-dtl-sec" : {
        "id"   : "user-details-section",
        "divs" : [{
            "id"    : "first-name-div",
            "label" : {
                "id"   : "first-name-label",
                "text" : "First Name"
            },
            "input" : {
                "id"   : "first-name-change"
            }
        },{
            "id"    : "last-name-div",
            "label" : {
                "id"   : "last-name-label",
                "text" : "Last Name"
            },
            "input" : {
                "id"   : "last-name-change"
            }
        },{
            "id"    : "password-div",
            "label" : {
                "id"   : "password-label",
                "text" : "Current Password"
            },
            "input" : {
                "type" : "password",
                "id"   : "password-change",
                "attr" : "disabled"
            },
            "button" : {
                "class" : "custom-button-styles",
                "id"    : "show-password-button",
                "text"  : "Show Password"
            }
        }]
    },
    "new-pwd-sec" : {
        "class"   : "new-password-label",
        "text"    : "New Password<em>(Only applicable if to be changed)</em> :",
        "inputs"  : [{
            "type"        : "password",
            "class"       : "new-password-input",
            "id"          : "new-password",
            "placeholder" : "New Password Please"
        },{
            "type"        : "password",
            "class"       : "new-password-input",
            "id"          : "re-entered-password",
            "placeholder" : "Re-enter new password"
        }]
    }
}

// Todo list Section and Details
const todoData = {
    "id"    : "show-saved-todos",
    "class" : "saved-todo",
    "art"   : {
        "id"      : "new-todo-div",
        "class"   : ["todo","new-todo","new-todo-toggle-display"],
        "inputs"  : [{
            "type"  : "text",
            "id"    : "todo-edit-title",
            "class" : "todo-edit-title"
        },{
            "type"        : "text",
            "id"          : "todo-list-title-input",
            "placeholder" : "Todo Name Please"
        },{
            "type"        : "text",
            "id"          : "new-todo-item",
            "placeholder" : "Your Todo Please"
        }],
        "ul"      : {
            "id" : "a-todo-list"
        },
        "err-msg" : [{
            "id"   : "todo-title-error-message",
            "text" : "Sorry that title already exists"
        }],
        "msg"     : [{
            "id"    : "new-todo-title-message",
            "class" : "title-message",
            "text"  : "Click the title to change"
        }],
        "buttons"  : [{
            "class" : "custom-button-styles",
            "id"    : "save-new-todo",
            "text"  : "Save"
        }]
    }
}

// Template for Dashboard Page
const dashboardPageTemplate = `
    <!-- DASHBOARD PAGE SECTION -->
    <div id="${dhbdPgData.id}">
    
        <!-- Nav Menu -->
        <nav class="${dhbdPgData.nav.class}">
            <button class="${dhbdPgData.nav.buttons[0].class[0]} ${dhbdPgData.nav.buttons[0].class[1]}" id="${dhbdPgData.nav.buttons[0].id}">${dhbdPgData.nav.buttons[0].text}</i></button>
            <button class="${dhbdPgData.nav.buttons[1].class[0]} ${dhbdPgData.nav.buttons[1].class[1]}" id="${dhbdPgData.nav.buttons[1].id}">${dhbdPgData.nav.buttons[1].text}</button>
            <button class="${dhbdPgData.nav.buttons[2].class[0]} ${dhbdPgData.nav.buttons[2].class[1]}" id="${dhbdPgData.nav.buttons[2].id}">${dhbdPgData.nav.buttons[2].text}</button>         
        </nav>
        
        <!-- User Details Section -->
        
        <div id="${dhbdPgUsrSet.id}" class="${dhbdPgUsrSet.class}">
            <button class="${dhbdPgUsrSet.buttons[0].class}">${dhbdPgUsrSet.buttons[0].text}</button>
            <h2>${dhbdPgUsrSet.h2}</h2>
            <p id="${dhbdPgUsrSet.msg[0].id}">${dhbdPgUsrSet.msg[0].text}</p>
            
            <!-- first name error message -->
            <div id="${dhbdPgUsrSet["err-msg"][0].id}">${dhbdPgUsrSet["err-msg"][0].text}</div>
            
            <section id="${dhbdPgUsrSet["usr-dtl-sec"].id}">
           
                <!-- First Name Input -->            
                <div id="${dhbdPgUsrSet["usr-dtl-sec"].divs[0].id}">
                    <!-- for attribute needs to have the same name as the input id -->
                    <label for="${dhbdPgUsrSet["usr-dtl-sec"].divs[0].input.id}" id="${dhbdPgUsrSet["usr-dtl-sec"].divs[0].label.id}">${dhbdPgUsrSet["usr-dtl-sec"].divs[0].label.text}</label>
                    <input id="${dhbdPgUsrSet["usr-dtl-sec"].divs[0].input.id}">
                </div>
                
                <!-- Last Name Input -->
                <div id="${dhbdPgUsrSet["usr-dtl-sec"].divs[1].id}">
                <!-- for attribute needs to have the same name as the input id -->
                    <label for="${dhbdPgUsrSet["usr-dtl-sec"].divs[1].input.id}" id="${dhbdPgUsrSet["usr-dtl-sec"].divs[1].label.id}">${dhbdPgUsrSet["usr-dtl-sec"].divs[1].label.text}</label>
                    <input id="${dhbdPgUsrSet["usr-dtl-sec"].divs[1].input.id}">
                </div>

                <!-- Password Input -->
                <div id="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].id}">
                <!-- for attribute needs to have the same name as the input id -->
                    <label for="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].input.id}" id="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].label.id}">${dhbdPgUsrSet["usr-dtl-sec"].divs[2].label.text}</label>
                    <input type="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].input.type}" id="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].input.id}" ${dhbdPgUsrSet["usr-dtl-sec"].divs[2].input.attr}>

                    <button class="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].button.class}" id="${dhbdPgUsrSet["usr-dtl-sec"].divs[2].button.id}">${dhbdPgUsrSet["usr-dtl-sec"].divs[2].button.text}</button>
                </div>
            </section>
            
            <!-- Section for changing Passwords -->
            <label class="${dhbdPgUsrSet["new-pwd-sec"].class}">${dhbdPgUsrSet["new-pwd-sec"].text}
                <input type="${dhbdPgUsrSet["new-pwd-sec"].inputs[0].type}" class="${dhbdPgUsrSet["new-pwd-sec"].inputs[0].class}" id="${dhbdPgUsrSet["new-pwd-sec"].inputs[0].id}" placeholder="${dhbdPgUsrSet["new-pwd-sec"].inputs[0].placeholder}">
                <input type="${dhbdPgUsrSet["new-pwd-sec"].inputs[1].type}" class=" ${dhbdPgUsrSet["new-pwd-sec"].inputs[1].class}" id="${dhbdPgUsrSet["new-pwd-sec"].inputs[1].id}" placeholder="${dhbdPgUsrSet["new-pwd-sec"].inputs[1].placeholder}">
            </label>
            
            <!-- Error Messages -->
            <div id="${dhbdPgUsrSet["err-msg"][1].id}">${dhbdPgUsrSet["err-msg"][1].text}</div>
            <div id="${dhbdPgUsrSet.msg[2].id}">${dhbdPgUsrSet.msg[2].text}</div>

            <!-- Save Button -->
            <button class="${dhbdPgUsrSet.buttons[1].class[0]} ${dhbdPgUsrSet.buttons[1].class[1]}" id="${dhbdPgUsrSet.buttons[1].id}">${dhbdPgUsrSet.buttons[1].text}</button>
            
            <p id="${dhbdPgUsrSet.msg[1].id}"><strong>${dhbdPgUsrSet.msg[1].text}</strong></p>
            
            <!-- Delete Button -->
            <button class="${dhbdPgUsrSet.buttons[2].class[0]} ${dhbdPgUsrSet.buttons[2].class[1]}" id="${dhbdPgUsrSet.buttons[2].id}">${dhbdPgUsrSet.buttons[2].text}</button>
        </div>
        <!-- Todo's Section -->
        <section id="${todoData.id}" class="${todoData.class}">
            <!-- this new-todo is always visible while on the dashboard page -->
            <article id="${todoData.art.id}" class="${todoData.art.class[0]} ${todoData.art.class[1]}">
                <input type="${todoData.art.inputs[0].type}" class="${todoData.art.inputs[0].class}" id="${todoData.art.inputs[0].id}">
                <input type="${todoData.art.inputs[1].type}" id="${todoData.art.inputs[1].id}" placeholder="${todoData.art.inputs[1].placeholder}">
                <span class="${todoData.art.msg[0].class}" id="${todoData.art.msg[0].id}">${todoData.art.msg[0].text}</span>
                <input type="${todoData.art.inputs[2].type}" id="${todoData.art.inputs[2].id}" placeholder="${todoData.art.inputs[2].placeholder}">
                <ul id="${todoData.art.ul.id}">
                    <!-- A list of New todo's will dynamically appear here -->
                </ul>
                <!-- Error Messages -->
                <div id="${todoData.art["err-msg"][0].id}">${todoData.art["err-msg"][0].text}</div>
                <button class="${todoData.art.buttons[0].class}" id="${todoData.art.buttons[0].id}">${todoData.art.buttons[0].text}</button>
            </article>

            <!-- saved todo's will show in the browser here(dynamically loaded) -->
            
        </section>
    </div>
`;

const waitHtml = () => {
    document.body.innerHTML = startPageTemplate;
    document.body.innerHTML += loginPageTemplate;
    document.body.innerHTML += signupPageTemplate;
    document.body.innerHTML += dashboardPageTemplate;
    
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", waitHtml);
