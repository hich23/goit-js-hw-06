const changeColorButtonEl = document.querySelector('.change-color');
const currentColorTextEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColorButtonClick = () => {
  currentColorTextEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

changeColorButtonEl.addEventListener('click', onChangeColorButtonClick);