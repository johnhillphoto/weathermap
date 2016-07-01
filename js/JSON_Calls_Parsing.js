//set up an object to receive the weather data
var weatherObject=[
    {   cityField:"#city1",
        dateField:"#date1",
        city:"empty",
        date:"date1",
        cityLat:"cityLat1",
        citLong:"cityLong1",
        dayWeather:"weather1",
        dayIcon:"dayIcon1",
        highTemp:"dayTemp1",
        lowTemp:"nightTemp1",
        nightWeather:"nightWeather1",
        nightIcon:"nightIcon1",
        wayPointNumber:1,
        populated:false,
    }
];

//variable to count the number of cities
var wayPointCount=1;

//add new entry lines for each waypoint, fired by Add a Waypoint City button
function addAnotherCity(){
    wayPointCount++;
    var divToAppend="#entry"+wayPointCount;
 $(divToAppend).appendTo("#citiesanddates").css("visibility","visible");
    //create new object with variables for that line
    var newData={
        cityField:"#city"+wayPointCount,
        dateField:"#date"+wayPointCount,
        city:" ",
        date:" ",
        cityLat:" ",
        citLong:" ",
        dayWeather:" ",
        dayIcon:" ",
        highTemp:" ",
        lowTemp:" ",
        nightWeather:" ",
        nightIcon:" ",
        wayPointNumber:wayPointCount,
        populated:false
  }//end newVariables object
    weatherObject.push(newData);
} //addAnotherCity Function

function getWeather(callback){
    weatherObject.forEach(function(weatherObItem) {

    var cityID=weatherObItem.cityField;
    var cityName=$(cityID).val();
    var dateID=weatherObItem.dateField;
    var dateRtv=$(dateID).val();

    $.ajax( {
		//get data from JSON feed
        url : "https://api.worldweatheronline.com/premium/v1/weather.ashx?q="+cityName+"&format=json&num_of_days=0&date="+dateRtv+"&cc=no&mca=no&fx24=no&includelocation=yes&tp=12&key="+weatherKey,
		dataType : "jsonp",
		success : function(parsed_json) {
  //put parsed data into weatherObject for each city
        weatherObItem.city = parsed_json.data.nearest_area[0].areaName[0].value;
        weatherObItem.date = parsed_json.data.weather[0].date;
        weatherObItem.cityLat = parsed_json.data.nearest_area[0].latitude;
        weatherObItem.citLong = parsed_json.data.nearest_area[0].longitude;
        weatherObItem.dayWeather = parsed_json.data.weather[0].hourly[0].weatherDesc[0].value;
        weatherObItem.dayIcon = parsed_json.data.weather[0].hourly[0].weatherIconUrl[0].value;
        weatherObItem.highTemp = parsed_json.data.weather[0].maxtempF;
        weatherObItem.lowTemp = parsed_json.data.weather[0].mintempF;
        weatherObItem.nightWeather = parsed_json.data.weather[0].hourly[1].weatherDesc[0].value;
        weatherObItem.nightIcon = parsed_json.data.weather[0].hourly[1].weatherIconUrl[0].value;
        weatherObItem.populated = true;
        callback();
		}
    });// end ajax success request

    });//end foreach loop
    }//end getWeather function

// $( document ).ready(function() {


//     });// document ready function
