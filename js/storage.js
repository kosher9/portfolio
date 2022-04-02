const userNameField = document.getElementById('name');
const userEmailField = document.getElementById('email');
const messageField = document.getElementById('message');

let userInfo = {
  name: '',
  email: '',
  message: '',
};

function loadLocalStorage() {
  const data = localStorage.getItem('user');
  userInfo = JSON.parse(data);
  userNameField.value = userInfo.name;
  userEmailField.value = userInfo.email;
  messageField.value = userInfo.message;
}

function createLocalStorage() {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(userInfo));
  } else {
    loadLocalStorage();
  }
}

function updateLocalStorage() {
  localStorage.setItem('user', JSON.stringify(userInfo));
}

createLocalStorage();

function addEvent(element, event, callback) {
  const previousEventCallBack = element[`on${event}`];
  element[`on${event}`] = (e) => {
    let output = callback(e);

    if (output === false) { return false; }

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if (output === false) { return false; }
    }
    return false;
  };
}

addEvent(userNameField, 'input', () => {
  userInfo.name = userNameField.value;
  updateLocalStorage();
});

addEvent(userEmailField, 'input', () => {
  userInfo.email = userEmailField.value;
  updateLocalStorage();
});

addEvent(messageField, 'input', () => {
  userInfo.message = messageField.value;
  updateLocalStorage();
});

window.addEventListener('load', () => {
  updateLocalStorage();

  loadLocalStorage();
});