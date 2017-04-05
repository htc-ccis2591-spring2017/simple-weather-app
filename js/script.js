console.log("hello js"); 
$(function () { 
  
console.log("hello"); 
    
    displayDescription = function (target, weather) { 
        html = ""; 
        html += "<ul><h2>Weather Description</h2>"; 
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
 

 $("#submit").on("click", function(){ 
     
     let zipcode = $("#zip").val(); 
     let weatherApiKey = $("#apikey").val(); 
     let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=" + weatherApiKey + "&units=imperial"; 
     console.log("The API Key and Zip Code are: " + weatherApiKey + " and", + zipcode ); 
     console.log("The url for this is: " + url ); 
   
    $.getJSON(url, function (data) { 
   
     console.log("1", data); 
     displayDescription("#weather", data.weather); 
     currentTemp("#weather", data.main);      
 

     }).fail(function (data) { 
         console.log(data); 
     }); 
     
 }) 
      
 }); 
