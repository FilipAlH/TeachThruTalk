const loginUser = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    
      // Send a POST request to the API endpoint
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/languages');
      } else {
        alert("Your password must be be longer than 8 characters or your email is not valid, please try again");
      }
    };
  
  document.querySelector('.login-form').addEventListener('submit', loginUser);