const fetchButton = document.getElementById('fetch-button');

function getLocation() {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiZmlsaXBhbGgiLCJhIjoiY2t2ZTliNzJmYmZqejJxcTZ5Mzg0eXBkeCJ9.Rbgy_AKOx657SU1EM_F4bw`)
        .then((response) => response.json())
            .then((data) => console.log(data))
}

fetchButton.addEventListener('click', getLocation);
