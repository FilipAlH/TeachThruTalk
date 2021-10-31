mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsaXBhbGgiLCJhIjoiY2t2ZTliNzJmYmZqejJxcTZ5Mzg0eXBkeCJ9.Rbgy_AKOx657SU1EM_F4bw';
const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Stephany',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-79.470111, 43.738883]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Jeffrey',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [10.013979, 53.630538]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Aar',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [127.028887, 37.505291]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Filip',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.9236, -19.8678]
            }
        }
    ]
};

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0,0],
    zoom: 1
});

// Add markers to the map.
for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `url(https://buildyourspechere.com/wp-content/uploads/2020/10/placeholder-image-person-jpg.jpg)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('click', () => {
        window.alert(marker.properties.message);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
}