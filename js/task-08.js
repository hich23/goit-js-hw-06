const loginFormEl = document.querySelector('.login-form');
const emailInputEl = loginFormEl.elements.email;
const passwordInputEl = loginFormEl.elements.password;

const onSubmitLoginForm = (event) => {
    event.preventDefault();

    if (emailInputEl.value === '' || passwordInputEl.value === '') {
        alert('All fields must be filled');
    } else {
        const formInputData = {
            email: emailInputEl.value,
            password: passwordInputEl.value,
        }
        console.log(formInputData);
        loginFormEl.reset();
    }
}

loginFormEl.addEventListener('submit', onSubmitLoginForm);