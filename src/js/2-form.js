const localStorageKey = 'feedback-form-state';

const refs = {
  formSearch: document.querySelector('.feedback-form'),
};

const savedFormState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedFormState) {
  refs.formSearch.elements.email.value = savedFormState.email ?? '';
  refs.formSearch.elements.message.value = savedFormState.message ?? '';
}

refs.formSearch.addEventListener('input', onInputForm);
refs.formSearch.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  const formElement = e.currentTarget.elements;
  const inputEmail = formElement.email.value.trim();
  const textareaMessage = formElement.message.value.trim();

  const valueForm = {
    email: inputEmail,
    message: textareaMessage,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(valueForm));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(refs.formSearch.elements.email.value);
  console.log(refs.formSearch.elements.message.value);

  localStorage.removeItem(localStorageKey);

  refs.formSearch.reset();
}
