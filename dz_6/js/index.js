const password = document.querySelector('#password');
const toggleVisibility = document.querySelector('#toggle-visibility');
let state = new Map([
  ['password', 'text'],
  ['text', 'password']
])

toggleVisibility.addEventListener('click', () => {
  password.setAttribute('type', state.get(password.getAttribute('type')))
})