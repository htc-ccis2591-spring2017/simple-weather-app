$(function () {
    'use strict';
    console.log("Weather App");

    $("#submit").click(function () {
        let zipcode = $("#zip").val();
        let apiKey = $("#apikey").val();
        getApiData(zipcode, apiKey);
    })

    function getApiData(zipcode, apiKey) {
        console.log(zipcode);

        $.ajax({
            type: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=Imperial&appid=" + apiKey,
            dataType: "jsonp",
            contentType: "applications/javascript",
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            success: function (data) {
                // console.log(data);
                displayWeather("#weather", data.weather, data.main);
            },
        });
    }

    function displayWeather(target, weatherArray, main) {
        let html = "";
        $.each(weatherArray, function (index) {
            let weather = weatherArray[index];
            html += getWeatherHtml(weather, main);
        })
        $(target).append(html);
    }

    function getWeatherHtml(weather, main) {
        let html = "";
        html += '<p>' + "Temp is " + main.temp + "ºF with " + weather.description + ".</p>";
        return html;
    }

});