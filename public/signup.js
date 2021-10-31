function getLocation(event) {
    event.preventDefault()

    const signUpLocation = document.querySelector('#location').value
    const location = signUpLocation.split(' ').join('')
    let newArray = new Array
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZmlsaXBhbGgiLCJhIjoiY2t2ZTliNzJmYmZqejJxcTZ5Mzg0eXBkeCJ9.Rbgy_AKOx657SU1EM_F4bw`)
        .then((response) => response.json())
            .then((data) => {
                newArray.push(data.features[0].center[0]) 
                newArray.push(data.features[0].center[1])
                console.log(newArray)

                async function signUserUp() {
    
                    const signUpEmail = document.querySelector('#email').value
                    const signUpPassword = document.querySelector('#password').value
                    const signUpName = document.querySelector('#name').value
                
                    const signUp = await fetch('/signup', {
                        method: 'POST',
                        body: JSON.stringify({
                            name: signUpName,
                            email: signUpEmail,
                            password: signUpPassword,
                            location: newArray.join(', ')
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
                signUserUp()
            })
}

document.querySelector('#signUpButton').addEventListener('click', getLocation);