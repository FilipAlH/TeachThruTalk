const loginUser = async (event) => {
    event.preventDefault();
    console.log('trying to log in')
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email)
    console.log(password)
    
      // Send a POST request to the API endpoint
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email:email, password:password }),
        headers: { 'Content-Type': 'application/json' },
      });
       console.log(response);
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/languages');
      } else {
        alert("Email or Password is incorrect");
      }
    };
  
  document.getElementById('loginButton').addEventListener('click', loginUser);