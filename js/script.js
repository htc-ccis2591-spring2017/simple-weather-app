console.log("hello js");
$(function () {
    'use strict';
    console.log("Weather App");

    $.ajaxSetup({
        dataType: "jsonp"
    });
    $.ajax({
        url: "http://samples.openweathermap.org/data/2.5/weather?zip=94040,us,units=Imperial&appid=b1b15e88fa797225412429c1c50c122a1",
        dataType: "jsonp",
        contentType: "applications/javascript",
        success: function (data) {
            console.log(data);

        }

    });


});


// My Key 1facaaab905e18b5369e1dfd1605da85