const textInput = document.querySelector('#validation-input');
const textLength = textInput.getAttribute('data-length');

function ChangeColorInput() {
    if (Number(textLength) === textInput.value.length) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}

textInput.addEventListener('blur', ChangeColorInput);