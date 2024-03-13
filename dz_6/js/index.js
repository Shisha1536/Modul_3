let register = document.querySelector('.main__form_register-a');
register.onclick = () => {
    let user = document.querySelector('.main__form_label-user');
    let password = document.querySelector('.main__form_label-password');
    let registerp = document.querySelector('.main__form_register-p');
    let Login = document.querySelector('.main__form_btn-sign-in');
    let additionalFunctions = document.querySelector('.main__form_additional-functions');
    let singIn = document.querySelector('.main__form_h1');

    singIn.textContent = 'Sign up to';
    additionalFunctions.style.display = 'none';
    Login.textContent = 'Register';
    registerp.textContent = 'Already have an Account ?';

    blockEmail = document.createElement('div');
    blockConfrimPassword = document.createElement('div');
    labelEmail = document.createElement('label');
    labelConfrimPassword = document.createElement('label');
    inputEmail = document.createElement('input');
    inputConfrimPassword = document.createElement('input');

    blockEmail.className = 'block-email';
    blockConfrimPassword.className = 'block-confrim-password';





    labelEmail.textContent = 'Email';
    labelEmail.className = 'Email';
    labelContack.for = '#contack';
    labelContack.textContent = 'Contact Number';
    labelContack.className = 'block-user-contack__label-contack';
    inputUser.type = 'text';
    inputUser.name = 'user';
    inputUser.id = 'user';
    inputUser.placeholder = 'User name';
    inputContack.type = 'tel';
    inputContack.name = 'contack';
    inputContack.id = 'contack';
    inputContack.placeholder = 'Contact Number';

}