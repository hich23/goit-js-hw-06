const fontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text')

const onSliderMoving = () => {
    textSpanEl.style.fontSize = `${fontSizeControlEl.value}px`;
}

fontSizeControlEl.addEventListener('input', onSliderMoving);