const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button');

const btnDecrement = buttons[0];
const btnIncrement = buttons[1];

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);


let value = 0;

function decrement() {
    value -= 1;
    counterValue.textContent = value;
}


function increment() {
    value += 1;
    counterValue.textContent = value;

}
