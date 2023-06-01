/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */
let validateForm = () => {
    let isFormValid = validateUserName()
                      && validateEmail()
                      && validatePassword()
                      && validateConfirmPassword()
                      && validatePasswordsMatch();
    if(isFormValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};

// validate UserName
let validateUserName = () => {
    let inputField = document.querySelector('#username');
    if(inputField.value === ''){
        applyColors(inputField,'orangered');
        displayErrorMessage('UserName is Required');
        return false;
    }
    else if(inputField.value.length < 4){
        applyColors(inputField,'orangered');
        displayErrorMessage('Min. 4 chars Required');
        return false;
    }
    else if(!inputField.value.match(new RegExp('^[A-Za-z0-9_]{1,15}$'))){
        applyColors(inputField,'orangered');
        displayErrorMessage('No Special Chars Allowed');
        return false;
    }
    else{
        applyColors(inputField,'limegreen');
        return true;
    }
};

// validate Email
let validateEmail = () => {
    let inputField = document.querySelector('#email');
    if(inputField.value === ''){
        applyColors(inputField,'orangered');
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        applyColors(inputField,'limegreen');
        return true;
    }
};

// validate Password
let validatePassword = () => {
    let inputField = document.querySelector('#password');
    if(inputField.value === ''){
        applyColors(inputField,'orangered');
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        applyColors(inputField,'limegreen');
        return true;
    }
};

// validate Confirm Password
let validateConfirmPassword = () => {
    let inputField = document.querySelector('#c_password');
    if(inputField.value === ''){
        applyColors(inputField,'orangered');
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        applyColors(inputField,'limegreen');
        return true;
    }
};

// validate Passwords Match
let validatePasswordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let c_passwordField = document.querySelector('#c_password');
    if(passwordField.value !== c_passwordField.value){
        applyColors(passwordField,'orangered');
        applyColors(c_passwordField,'orangered');
        displayErrorMessage('Passwords are Not Matched');
        return false;
    }
    else{
        applyColors(passwordField,'limegreen');
        applyColors(c_passwordField,'limegreen');
        return true;
    }
};

// applyColors
let applyColors = (inputField, color) => {
    inputField.style.borderColor = color;
    inputField.style.boxShadow = `0 0 10px ${color}`;
};

// display Error Message
let displayErrorMessage = (message) => {
    let errorMessageDiv = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    errorMessageDiv.appendChild(h3Tag);
    setTimeout(removeErrorMessage,2000);
};

// remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};
