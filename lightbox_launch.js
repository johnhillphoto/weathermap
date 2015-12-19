console.log("above this handler");
$(document).ready(function() {


	$( "#weatherButton" ).click(function() {
	 	getWeather(function () {
			
	 		
	 	});//end getWeather function
        
        createMapStuff();
			console.log("blad");
			$('#map').lightbox_me({
		        centered: true,
		        overlaySpeed: 0,
		        onLoad: function() { 
		            $('#map').css("visibility","visible");
		            } //onLoad
		        });//lightbox_me

	}); //end click function

});//document ready handler


// function popMeUp(){
// 	getWeather();

// 	createMapStuff();

// 	$('#map').lightbox_me({
//         centered: true,
//         overlaySpeed: 0,
//         onLoad: function() { 
//             $('#map').css("visibility","visible");
//             } 
//         });
// 	// $('#map').css("visibility","visible");

// }//end popMeUp
