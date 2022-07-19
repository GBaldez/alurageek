import { validateMessage, validation } from "./validateForm.js";

const inputs = document.querySelectorAll('input');
const message = document.querySelector('textarea');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validation(input);
    });
});

message.addEventListener('blur', () => {
    validateMessage(message);
});

console.log('working');