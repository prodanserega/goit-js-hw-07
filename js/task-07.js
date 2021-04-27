const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeText() {
    text.style.fontSize = inputControl.value + 'px';

}

inputControl.addEventListener('input',  changeText);