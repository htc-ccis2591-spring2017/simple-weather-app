// CCIS2591 - JavaScript
// Simple Weather App
// Cheryl Davis
$(document).ready(function () {
    $("#submit").on("click", function () {
        let zipCode = document.getElementById("zip").value;
        let apiKey = document.getElementById("apikey").value;
        let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=" + apiKey;
        $.getJSON(url, function (data) {
            let currentTemp = data.main.temp;
            let weatherDesc = data.weather[0].description;
            let newDiv = document.createElement("DIV");
            newDiv.id = "current-temp";
            newDiv.style.cssText = "font-size:15px";
            $("#weather").append(newDiv);
            let tempMsg = "<h2>Current temperature: " + currentTemp + " degrees F.  </h2>";
            let descMsg = "<h2>Current conditions: " + weatherDesc + " </h2>";
            $("#current-temp").append(tempMsg);
            $("#current-temp").append(descMsg);
        }); //end of JSON function
    })
})