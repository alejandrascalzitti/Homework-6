var button = $('.button');
var inputValue = $('.inputValue');
var cityName = $('.name');
var cityTemp = $('.temp');
var cityHumidity = $('.humidity');
var windSpeed = $(".windSpeed")
var uvIndex= $(".uvIndex")
var cityIcon=$(".icon")
var cities = []


button.on('click', function () {
    $(".searchedCity").empty()

    var cityToSearch=inputValue.val()
    cities.push(cityToSearch)
    
    for(var i=0;i<cities.length;i++){
        var myBtn=$("<button>")
        myBtn.attr("class","button")
        myBtn.text(cities[i])
        $(".searchedCity").append(myBtn)
    }


    //  fetch ('https://api.openweathermap.org/data/2.5/weather?q= '+inputValue.value+'&appid=3ecb5ef443adbe249e3dc408e8d2fb8e')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => alert("Wrong City name!"))

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + cityToSearch+ '&appid=3ecb5ef443adbe249e3dc408e8d2fb8e',
        method: "GET"
    }).then(function (results) {
        console.log(results);
        cityName.html(cityToSearch)
        cityTemp.text(Math.floor(results.main.temp -273.15) *1.8 + 32)
        cityHumidity.text(results.main.humidity)
        windSpeed.text(results.wind.speed)
        cityIcon.attr("src", "http://openweathermap.org/img/wn/"+results.weather[0].icon+"@2x.png")
        var cityLat=results.coord.lat
        var citylon=results.coord.lon


    })

})