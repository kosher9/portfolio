let userNameField = document.getElementById('name');
let userEmailField = document.getElementById('email');
let messageField = document.getElementById('message');

let userInfo = {
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    message: localStorage.getItem('message'),
}


function checkUserNull(){
    if(userInfo.name === null){
        userInfo.name = ""
    } 
    if(userInfo.email === null){
        userInfo.email = ""
    }
    if(userInfo.message === null){
        userInfo.message = ""
    }
}

function createLocalStorage(){
    if(localStorage.getItem('name') === null && localStorage.getItem('email') === null && localStorage.getItem('message') === null){
        localStorage.setItem('name', "");
        localStorage.setItem('email', "");
        localStorage.setItem('message', "");
    }
}

function loadLocalStorage(){
    userNameField.value = localStorage.getItem('name')
    userEmailField.value = localStorage.getItem('email')
    messageField.value = localStorage.getItem('message')
}
  
function updateLocalStorage(){
    localStorage.setItem('name', userInfo.name)
    localStorage.setItem('email', userInfo.email)
    localStorage.setItem('message', userInfo.message)
}

checkUserNull()

createLocalStorage()

function addEvent(element, event, callback) {
    const previousEventCallBack = element[`on${event}`];
    element[`on${event}`] = function (e) {
      let output = callback(e);
  
      if (output === false) return false;
  
      if (typeof previousEventCallBack === 'function') {
        output = previousEventCallBack(e);
        if (output === false) return false;
      }
      return false;
    };
}

addEvent(userNameField, 'input', () => {

    userInfo.name = userNameField.value;
    updateLocalStorage()
    console.log(userInfo.name)
  
});
  
addEvent(userEmailField, 'input', () => {
  
    userInfo.email = userEmailField.value
    // localStorage.setItem('lname', userInfo.email)
    updateLocalStorage()
    console.log(userInfo.email)
});
  
addEvent(messageField, 'input', () => {
  
    userInfo.message = messageField.value
    updateLocalStorage()
    console.log(messageField.value)
});
  
window.addEventListener('load', () => {

    updateLocalStorage()
  
    loadLocalStorage()
  
    console.log("life")
});