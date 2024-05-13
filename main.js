const forms = document.querySelectorAll('.signup-form');
if(forms.length > 0) {
  forms.forEach(form => {
    const formInputs = form.querySelectorAll('input');
    const errorMessageContainer = form.querySelector('.error-message');

    form.addEventListener('submit', (e) => {
      if(formInputs.length == 0) {
        e.preventDefault();
        return false;
      }

      formInputs.forEach(input => {
        if(isInputEmpty(input.value)) {           
          e.preventDefault();
          input.classList.add('error');
          errorMessageContainer.textContent = "You have to fill in your email!";
          return false;
        }  

        if(input.type === "text" && !isEmailValid(input.value)) {
          e.preventDefault();
          input.classList.add('error');
          errorMessageContainer.textContent = "Please check your email!";
          return false;
        }        
      })
    })

    
  })
}

function isEmailValid(email) {
  return /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function isInputEmpty(inputValue) {
  if(inputValue === null || inputValue === "") {
    return true;
  }
  return false;
}