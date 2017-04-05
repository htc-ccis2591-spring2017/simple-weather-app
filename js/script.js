$(function() {
  const $submit = $(`#submit`),
    $weather = $(`#weather`);
  $submit.click(function() {
    let key = $(`#apikey`).val(),
      zip = $(`#zip`).val(),
      country = `us`,
      url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}&units=imperial`;
    $.getJSON(url, function(data) {
      let temp = Math.floor(data.main.temp),
        description = data.weather[0].description,
        city = data.name;
      $weather.html(`<p>The weather is ${description} and ${temp}&deg;F in ${city}.</p>`);
      console.log(data.weather);
    }).fail(function(data) {
      console.log(`failed ` + data);
    });
  });
});
