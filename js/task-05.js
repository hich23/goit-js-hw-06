const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const onNameInputType = () => {
  if (nameInputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = nameInputEl.value;
  }
}

nameInputEl.addEventListener('input', onNameInputType);