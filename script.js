var APIKey = "5267211d26e021e31b3419800fbf2329";

var cityContainer = document.getElementById('city-container');
var cityShow = document.getElementById('cityName');
var tempShow = document.getElementById('tempC');
var windShow = document.getElementById('wind');
var humidShow = document.getElementById('humidity');
var uvShow = document.getElementById('uv');
var fetchButton = document.getElementById('submit');
var city = document.querySelector('.cityInput');



function getCity() {
    
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=metric&appid=" + APIKey;
    fetch(cityUrl)
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data)
           
            // variables for creating elements
            var cityName = document.createElement('h2');
            var showIcon = document.createElement('img');            
            var tempC = document.createElement('p');
            var wind = document.createElement('p');
            var humid = document.createElement('p');

            // attaching data found
            cityName.textContent = data.name;
            showIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);    
            tempC.textContent = `Temp: ${data.main.temp} C`;
            wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
            humid.textContent = `Humidity: ${data.main.humidity}%`;

           // appending to container
            cityShow.append(cityName);
            cityShow.append(showIcon);
            tempShow.append(tempC);
            windShow.append(wind);
            humidShow.append(humid);

            var lon = data.coord.lon;
            var lat = data.coord.lat;
            uvIndex(lon, lat);

            function uvIndex(){
                var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon="+lon+"&exclude=hourly,daily,minutely,alerts&appid="+APIKey;
            
                fetch(uvUrl) .then(function (response) {
                    return response.json()
            
                })
                .then(function (data) {
                    console.log(data)
                    var uvi = document.createElement('p')
            
                    uvi.textContent = `UV Index: ${data.current.uvi}`;

                    uvShow.append(uvi);
            })
            }
        })
}

fetchButton.addEventListener('click', getCity);

