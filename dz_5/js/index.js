let singUp = document.querySelector('.sing-up_lable-a');
singUp.onclick = () => {
    if (singUp.textContent == 'Sing up') {
        mainFormBlockMessenger = document.querySelector('.main__form_block-messenger');
        mainFormForPassword = document.querySelector('.main__form_for-password');
        mainFormBtnSignIn = document.querySelector('.main__form_btn-sign-in');
        mainFormLabelEmail = document.querySelector('.main__form_label-email');
        
        mainFormBlockMessenger.style.display = 'none';
        mainFormForPassword.style.display = 'none';
        mainFormBtnSignIn.textContent = 'Sing up'
        singUp.textContent = 'Sing in';

        mainBlockUserContack = document.createElement('div');
        blockUser = document.createElement('div');
        blockContack = document.createElement('div');
        labelUser = document.createElement('label');
        labelContack = document.createElement('label');
        inputUser = document.createElement('input');
        inputContack = document.createElement('input');

        mainBlockUserContack.className = 'main__block-user-contack';
        blockUser.className = 'block-user-contack__block-user';
        blockContack.className = 'block-user-contack__block-contack';
        labelUser.for = '#user';
        labelUser.textContent = 'User name';
        labelUser.className = 'block-user-contack__label-user';
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
        blockUser.append(labelUser, inputUser);
        blockContack.append(labelContack, inputContack);
        mainBlockUserContack.append(blockUser, blockContack);
        mainFormLabelEmail.after(mainBlockUserContack);
    } else {
        mainFormBlockMessenger = document.querySelector('.main__form_block-messenger');
        mainFormForPassword = document.querySelector('.main__form_for-password');
        mainFormBtnSignIn = document.querySelector('.main__form_btn-sign-in');
        mainFormLabelEmail = document.querySelector('.main__form_label-email');
        mainBlockUserContack = document.querySelector('.main__block-user-contack');
        
        mainFormBlockMessenger.style.display = 'flex';
        mainFormForPassword.style.display = 'block';
        mainFormBtnSignIn.textContent = 'Sing in'
        singUp.textContent = 'Sing up';
        mainBlockUserContack.style.display = 'none';
    }
}