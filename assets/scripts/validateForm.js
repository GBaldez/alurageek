
export const validation = (input) => {
    const inputType = input.dataset.type;

    if(validators[inputType]) {
        validators[inputType](input);
    }
    if(input.validity.valid) input.classList.remove('invalid');
    else {
        input.classList.add('invalid');
    }
}

const validators = {
    name: (input) => validateName(input),
    email: (input) => validateEmail(input),
    password: (input) => validatePassword(input)
}
const messagesError = {
    name: {
        valueMissing: 'Por favor, insira seu nome.',
        tooLong: 'Seu nome deve ter no máximo 40 caracteres.'
    },
    email: {
        valueMissing: 'Por favor, insira seu e-mail.',
        typeMismatch: 'Por favor, insira um e-mail válido.'
    },
    password: {
        valueMissing: 'Por favor, insira sua senha.',
        tooShort: 'Sua senha deve ter no mínimo 6 caracteres.',
        tooLong: 'Sua senha deve ter no máximo 12 caracteres.',
        patternMismatch: 'Sua senha deve ter no mínimo uma letra maiúscula, uma letra minúscula e um número.'
    },
    message: {
        valueMissing: 'Por favor, insira sua mensagem.',
        tooLong: 'Sua mensagem deve ter no máximo 120 caracteres.'
    }
}

const showError = (input, message) => {
    const inputType = input.dataset.type;
    const errorMessage = messagesError[inputType][message];
    input.setCustomValidity(errorMessage);
    const span = document.createElement('span');
    span.classList.add('error');
    span.innerText = errorMessage;
    input.parentNode.appendChild(span);
    console.log(errorMessage);
}
const validateName = (name) => {
    if (name.value === '' || name.value.length > 40) showError(name, name.validity.tooLong ? 'tooLong' : 'valueMissing');
    else name.setCustomValidity('');
    }

export const validateMessage = (message) => {
        if (message.value === '' || message.value > 120) showError(message, message.validity.tooLong ? 'tooLong' : 'valueMissing');
        else message.value.setCustomValidity('');
    }

const validateEmail = (email) => {
    if (email.value === '' || !email.value.includes('@')) email.value.setCustomValidity('Por favor, insira um e-mail válido.');
    else email.value.setCustomValidity('');
}

const validatePassword = (password) => {
    if (password.value === '' || password.value.length < 6) password.value.setCustomValidity('Por favor, insira uma senha dentro dos requisitos.');
    else password.value.setCustomValidity('');
}