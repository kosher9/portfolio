const email = document.getElementById("email")
const form = document.querySelector("form")
const error = document.querySelector(".error")
let errorState = "valid"

function addEvent(element, event, callback) {
    let previousEventCallBack = element["on"+event];
    element["on"+event] = function (e) {
      const output = callback(e);
  
      // A callback that returns `false` stops the callback chain
      // and interrupts the execution of the event callback.
      if (output === false) return false;
  
      if (typeof previousEventCallBack === 'function') {
        output = previousEventCallBack(e);
        if(output === false) return false;
      }
    }
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function checkEmailField(){
    const test = hasUpperCase(email.value) || email.value.length == 0
    if(test){
        if (email.value.length == 0){
            errorState = "empty"
        } else {
            errorState = "invalid"
        }
    } else {
        errorState = "valid"
    }
}

function validateForm(){

    checkEmailField()
    if(errorState != "valid"){
        if(errorState == "invalid"){
            error.textContent = "Email is invalid. Should only use lower caracter."
        } else {
            error.textContent = "Please fill the email field!"
        }
        return false
        
    } else {
        return true
    }
}

// This defines what happens when the user types in the field
addEvent(email, "input", function(){
    checkEmailField()
    if(error.textContent != ""){
        error.textContent = ""
    }
})

// This defines what happens when the user tries to submit the data
function submitForm(event){

    if(validateForm() === false){
        event.preventDefault();
        window.history.back();
    }

}

