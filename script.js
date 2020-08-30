const apiKey = "1b4ec6288b0cc25765135b9928d11892";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";




$("#search-btn").on("click", function() {
    cityName = document.querySelector("#yourCity");
    console.log(cityName.value);

    const queryURL = apiURL + cityName.value + "&appid=" + apiKey + "&units=imperial"
    console.log(queryURL)


    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
  
        console.log(queryURL);
        console.log(response);
        
        $("#temp").html("current temp is: " + response.main.temp + "°F");


    });
    

});    


