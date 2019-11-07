$( document ).ready(function() {
    
    var weatherAPIKey = "&APPID=04deb1b03afd390386a0b443200664bc";
    var input = "minneapolis";
    var cityName = "q=" + input;
    var zipCode = "zip=" + input;
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?"+ cityName +"&APPID=fdb37b848dae719b5b9eca50be328745"


    console.log(weatherURL)


    $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function(response){
        console.log(response);

  
      });



});