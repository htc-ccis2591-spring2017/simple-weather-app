console.log("hello js");
$(function () {
 
console.log("hello");
 
/*
   getFeaturesHtml = function (coord) {
       
        //Display the features
        html = "";
        html += "<li>" + coord.lat + " <br> " + coord.lon +"</li>";
        return html;
    }   
 
*/
   
    displayDescription = function (target, weather) {
        html = "";
        html += "<ul><h2>Weather Description</h2>";
 
        /*
        $.each(coordArray, function (index) {
       
            console.log(coordArray[index]);
            coord = coordArray[index];
            html += getFeaturesHtml(coord);
        })
        */
        html += "<li>" + weather["0"].description + "</li>";
        html += "<li>" + weather["1"].description + "</li>";
       
        html += "</ul>";
        $(target).append(html);
    }  
    
        currentTemp = function (target, main) {
        html = "";
        html += "<ul><h2>Temperature</h2>";
 
        html += "<li>" + main.temp + 'F' +"</li>";

        html += "</ul>";
        $(target).append(html);
    }  

    //Clicking on the submit button
$("#submit").on("click", function(){
   
    
    //Declare variables for the values on the form
    let zipcode = $("#zip").val();
    let weatherApiKey = $("#apikey").val();
    let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=" + weatherApiKey + "&units=imperial";
    console.log("The API Key and Zip Code are: " + weatherApiKey + " and", + zipcode );
    console.log("The url for this is: " + url );
 
   $.getJSON(url, function (data) {
 
    console.log("1", data);
    //For assignment build HTML to show info on the web page
   
 
     displayDescription("#weather", data.weather);
     currentTemp("#weather", data.main);     
        
        
    
    }).fail(function (data) {
        console.log(data);
    });
   
})
    
});