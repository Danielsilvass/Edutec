const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form= document.querySelector('.login-form')

const validadeInput = ({ target }) => {
    if (target.value.length > 1) {
        button.removeAttribute('disabled')
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value)
    localStorage.setItem('assunto', 'SolarSistema')
    window.location = './jogo/jogo.html';
}

input.addEventListener('input', validadeInput)
form.addEventListener('submit', handleSubmit)
