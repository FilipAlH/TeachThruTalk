async function signUserUp(submit) {
    submit.preventDefault()

    const signUpEmail = document.querySelector('#email').value
    const signUpPassword = document.querySelector('#password').value
    const signUpName = document.querySelector('#name').value
    const signUpLocation = document.querySelector('#location').value

    const signUp = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({
            name: signUpName,
            email: signUpEmail,
            password: signUpPassword,
            location: signUpLocation
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (signUp.ok) {
        document.location.replace('/');
      } else {
        alert("Your password must be be longer than 8 characters or your email is not valid, please try again");
      }
}

document.querySelector('#signUpButton').addEventListener('click', signUserUp);