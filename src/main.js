import './style.css'

const input = document.querySelector('input[type="tel"]');

input.addEventListener('input', () => {
  input.value = input.value.replace(/\D/g, '');
});