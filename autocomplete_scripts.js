
// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate(autoVariable) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autoVariable.setBounds(circle.getBounds());
    });
  }
}
// [END region_geolocation]
/// Set up Autocompletes for 10 cities
var autocomplete,autocomplete2;
autocomplete = new google.maps.places.Autocomplete((document.getElementById("city1")),
      {types: ['(cities)']});
  autocomplete.addListener('place_changed');

autocomplete2 = new google.maps.places.Autocomplete((document.getElementById("city2")),
      {types: ['(cities)']});
  autocomplete2.addListener('place_changed');

autocomplete3 = new google.maps.places.Autocomplete((document.getElementById("city3")),
      {types: ['(cities)']});
  autocomplete3.addListener('place_changed');

autocomplete4 = new google.maps.places.Autocomplete((document.getElementById("city4")),
      {types: ['(cities)']});
  autocomplete4.addListener('place_changed');

autocomplete5 = new google.maps.places.Autocomplete((document.getElementById("city5")),
      {types: ['(cities)']});
  autocomplete5.addListener('place_changed');

autocomplete6 = new google.maps.places.Autocomplete((document.getElementById("city6")),
      {types: ['(cities)']});
  autocomplete6.addListener('place_changed');

autocomplete7 = new google.maps.places.Autocomplete((document.getElementById("city7")),
      {types: ['(cities)']});
  autocomplete7.addListener('place_changed');

autocomplete8 = new google.maps.places.Autocomplete((document.getElementById("city8")),
      {types: ['(cities)']});
  autocomplete8.addListener('place_changed');

autocomplete9 = new google.maps.places.Autocomplete((document.getElementById("city9")),
      {types: ['(cities)']});
  autocomplete9.addListener('place_changed');

autocomplete10 = new google.maps.places.Autocomplete((document.getElementById("city10")),
      {types: ['(cities)']});
  autocomplete10.addListener('place_changed');