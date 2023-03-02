const counterEl = document.getElementById('counter');
const valueEl = counterEl.querySelector('#value');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
const incrementBtn = counterEl.querySelector('[data-action="increment"]');


let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});