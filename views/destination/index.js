
const renderMap = (latitude, longitude) => {

   // Create a map centered on a specific location
const map = L.map('map').setView([latitude, longitude], 16);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([latitude, longitude]).addTo(map)
  .bindPopup('Current')
  .openPopup();
};


const fetchCurrentLocation = () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords; 
            console.log(latitude,longitude);
            renderMap(latitude, longitude);
        } 
        )}  
};



const fetchNearByDestinations = async () => {
    
};



const fetchLocationButton = document.getElementById('fetch-location');

fetchLocationButton.addEventListener('click', fetchCurrentLocation());