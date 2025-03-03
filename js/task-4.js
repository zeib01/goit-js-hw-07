document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const { email, password } = e.target.elements; 
  
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
  
    if (!emailValue || !passwordValue) {
      return alert("All form fields must be filled in");
    }
  
  
    const formData = {
      email: emailValue,
      password: passwordValue
    };
  
    console.log(formData);
  
    e.target.reset();
  });
