const refs = {
 textInput : document.querySelector('input#name-input'),
 nameOutput : document.querySelector('#name-output'),
}



refs.textInput.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameOutput.textContent = event.currentTarget.value;
}