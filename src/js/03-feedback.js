import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageTextarea = document.querySelector('[name="message"]');

const saveCurrentData = () => {
  const currentData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
};
emailInput.addEventListener('input', throttle(saveCurrentData, 500));
messageTextarea.addEventListener('input', throttle(saveCurrentData, 500));

const savedCurrentData = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (savedCurrentData) {
  emailInput.value = savedCurrentData.email;
  messageTextarea.value = savedCurrentData.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const currentData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  emailInput.value = '';
  messageTextarea.value = '';

  localStorage.removeItem('feedback-form-state');

  console.log(`
  email: ${currentData.email}  
  message: ${currentData.message}`);
});
