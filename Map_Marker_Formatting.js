///this file handles JS related to the Google Map
//this function formats the date into English Words, and removes 0 before day
function processDate(date){
   var monthNames = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December "];
  var dateArray=date.split("-");
  var monthNum = Number(dateArray[1]);
  var month=(monthNames[monthNum-1]);
      if(dateArray[2][0] === "0"){
        dateArray[2]=dateArray[2][1];     
      }//end if
  var builtDate = month + dateArray[2];
  return builtDate;
}//end function

//following sets up Google Map
var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.720029, lng: -74.006936},
    zoom: 5
  });    
}//end initMap function

$(function() {
    
    initMap();
                   
});//end ready function

//this blank array is ready to receive lat & long coordinates for each city to create the red polyline
 var flightPlanCoordinates = [];

function createMapStuff(){
    weatherObject.forEach(function(arrayElement){
              var customIcon = 'images/iconb'+arrayElement.wayPointNumber+'.png';
              var marker = new google.maps.Marker({
                "position": {lat: Number(arrayElement.cityLat), lng: Number(arrayElement.citLong)},
                map: map,
                icon: customIcon
          }); //end google.maps function call   

        //build an object of coordinates for polyline         
        var latLongObject = {lat: Number(arrayElement.cityLat), lng: Number(arrayElement.citLong)};             
        flightPlanCoordinates.push(latLongObject);

        //build html to put inside each Infowindow
        var contentString = 
        '<div class="jumbotron">'+
            '<container class="flex_container" id="first">'+
            '<item>'+
            arrayElement.city+
            '</item>'+
        '<item>'+
        processDate(arrayElement.date)+
        '</item>'+
        '</container>'+
        '<container class="flex_container" id="second">'+
        '<item>'+
        'High Temp :'+
        arrayElement.highTemp+
        '</item>'+
        '<item>'+
        'Low Temp :'+
        arrayElement.lowTemp+
        '</item>'+
        '</container>'+
        '<container class="flex_container" id="third">'+
        '<container class="flex_column" id="leftIcons">'+
        '<item>'+
        '<img src='+arrayElement.dayIcon+'>'+
        '</item>'+
        '<item class="desc">'+
        'Day: '+arrayElement.dayWeather+
        '</item>'+
        '</container>'+
        '<container class="flex_column" id="rightIcons">'+
        '<item>'+
        '<img src='+arrayElement.nightIcon+'>'+
        '</item>'+
        '<item class="desc">'+
        'Night: '+arrayElement.dayWeather+
        '</item>'+
        '</container>'+
        '</container>'+
        '</div>';


              var infowindow = new google.maps.InfoWindow({
        content:contentString 
        });


      infowindow.open(map,marker);

      //make each infowindow open with click
      google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
      });  

     
    });//end foreach loop

  //create red polyline, and set onto map
  var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    flightPath.setMap(map);

//start bounds and zoom work
var bounds = new google.maps.LatLngBounds();

for (var i=1;i<flightPlanCoordinates.length;i++){
  if ((flightPlanCoordinates[i].lat) !== NaN && (flightPlanCoordinates[i].lat) !== 0){
  var lat = flightPlanCoordinates[i].lat;
  var lng = flightPlanCoordinates[i].lng;
  bounds.extend(new google.maps.LatLng(lat, lng));
  }//end if 

} //end for loop


//adjust the viewport of the map
//special note: this only needs to be done once, don't put it in a loop
map.fitBounds(bounds);
var zoomNum=map.getZoom();
zoomNum=zoomNum-1;
map.setZoom(zoomNum);



}
