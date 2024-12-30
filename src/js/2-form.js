let formData = {
  email: '',
  message: '',
};
const feedbackFormEl = document.querySelector('.feedback-form');

const getFormDataFromLS = () => {
  try {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataFromLS === null) {
      return;
    }
    formData = formDataFromLS;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        feedbackFormEl.elements[key].value = formData[key];
      }
    }
  } catch (err) {
    console.log(err);
  }
};
getFormDataFromLS();

const saveToLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

const onFormFieldInput = event => {
  const formFieldEl = event.target;
  const fieldValue = formFieldEl.value.trim();
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  saveToLS('feedback-form-state', formData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log('Submitted data:', formData);

  localStorage.removeItem('feedback-form-state');

  formData = { email: '', message: '' };

  event.currentTarget.reset();
};
feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

const submitBtn = document.querySelector('button');
submitBtn.classList.add('submit-btn');
