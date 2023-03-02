const validationInputEl = document.querySelector('#validation-input');
const validDataLength = Number(validationInputEl.getAttribute('data-length'));

const onInputTypeValidation = () => {
    if (validationInputEl.value.length === validDataLength) {
        validationInputEl.classList.add('valid');
        validationInputEl.classList.remove('invalid');
    } else if (validationInputEl.value.length === 0) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.remove('valid');
    }
    else {
        validationInputEl.classList.add('invalid');
         validationInputEl.classList.remove('valid');
  }
}

validationInputEl.addEventListener('blur', onInputTypeValidation);