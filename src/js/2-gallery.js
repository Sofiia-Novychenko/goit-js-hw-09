let formData = {
  email: '',
  message: '',
};
const feedbackFormEl = document.querySelector('.feedback-form');

const saveToLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

const load = key => {
  try {
    const dataFromLS = localStorage.getItem(key);

    return dataFromLS === null ? undefined : JSON.parse(dataFromLS);
  } catch (err) {
    console.log(err);
  }
};

const getFormDataFromLS = () => {
  const formDataFromLS = load('feedback-form-state');

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    feedbackFormEl.elements[key].value = formDataFromLS[key];
  }
};
getFormDataFromLS();

const onFormFieldInput = event => {
  const formFieldEl = event.target;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  saveToLS('feedback-form-state', formData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};
feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

const submitBtn = document.querySelector('button');
submitBtn.classList.add('submit-btn');
