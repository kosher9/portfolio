const email = document.getElementById('email');
const error = document.querySelector('.error');
const form = document.querySelector('form');
let errorState = 'valid';

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

function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}

function checkEmailField() {
  const test = hasUpperCase(email.value) || email.value.length === 0;
  if (test) {
    if (email.value.length === 0) {
      errorState = 'empty';
    } else {
      errorState = 'invalid';
    }
  } else {
    errorState = 'valid';
  }
}

function validateForm() {
  checkEmailField();
  if (errorState !== 'valid') {
    if (errorState === 'invalid') {
      error.textContent = 'Email is invalid. Should only use lower caracter.';
    } else {
      error.textContent = 'Please fill the email field!';
    }
    return false;
  }
  return true;
}

// This defines what happens when the user types in the field
addEvent(email, 'input', () => {
  checkEmailField();
  if (error.textContent !== '') {
    error.textContent = '';
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm() === false) {
    evt.preventDefault();
    window.history.back();
  }
});
