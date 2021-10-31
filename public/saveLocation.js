const fetchButton = document.getElementById('fetch-button');

let newarray = new Array

function getLocation() {
    const locationInput = 'tokyo, japan'
    const location = locationInput.split(' ').join('')
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZmlsaXBhbGgiLCJhIjoiY2t2ZTliNzJmYmZqejJxcTZ5Mzg0eXBkeCJ9.Rbgy_AKOx657SU1EM_F4bw`)
        .then((response) => response.json())
            .then((data) => {
                newarray.push(data.features[0].center[0]) 
                newarray.push(data.features[0].center[1])
                console.log(newarray)
            })
}

fetchButton.addEventListener('click', getLocation);