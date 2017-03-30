$(function () {
    console.log("hello");

    let zipcode = "55352";
    //let weatherApiKey = "c8d9bf66ada13d48d2af09f5cb720c44";
    let weatherApiKey = localStorage.getItem("key");
    console.log(weatherApiKey);

    if (weatherApiKey == null) {
        $("#apikey").show();
    } else { //clears list and creates new from storage.
        //weatherApiKey = JSON.parse(weatherApiKey);
        $("#api-div").hide();
    }




    $("#submit").on("click", function () {
        let zipcode = $("#zip").val();
        if (weatherApiKey == null) {
            weatherApiKey = $("#apikey").val();
            localStorage.setItem("key", weatherApiKey);

        };
        let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=" + weatherApiKey + "&units=imperial";

        $.getJSON(url, function (data) {
            console.log(data);
            $("#weather").append("<p> Description: " + data.weather[0].description + "</p><p> Temperature: " + data.main.temp + "</p>");
        }).fail(function (data) {
            console.log(data);
        });
        $("#api-div").hide();



    })



});