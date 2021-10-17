var APIKey = "5267211d26e021e31b3419800fbf2329";

var cityContainer = document.getElementById('city-container');

var fetchButton = document.getElementById('submit');
var city = document.querySelector('.cityInput');



function searchCity(){
   event.preventDefault();



    getCity()
   
    
    
};

function getCity() {
    
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=metric&appid=" + APIKey;
    fetch(cityUrl)
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data)
           
            var unixFormat = moment.unix(data.dt).format("MMM Do, YYYY");
            console.log(unixFormat)
            // variables for creating elements
            var cityName = document.createElement('h2');
            var today = document.createElement('p');
            var showIcon = document.createElement('img');        
            var descript = document.createElement('p');    
            var tempC = document.createElement('p');
            var wind = document.createElement('p');
            var humid = document.createElement('p');

            // attaching data found
            cityName.textContent = data.name;
            today.textContent = unixFormat;
            showIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);    
            descript.textContent = data.weather[0].description;
            tempC.textContent = `Temp: ${data.main.temp} C`;
            wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
            humid.textContent = `Humidity: ${data.main.humidity}%`;

           // appending to container
           cityContainer.append(cityName);
           cityContainer.append(today);
           cityContainer.append(showIcon);
           cityContainer.append(descript);
           cityContainer.append(tempC);
           cityContainer.append(wind);
           cityContainer.append(humid);

            var lon = data.coord.lon;
            var lat = data.coord.lat;
            uvIndex(lon, lat);

            function uvIndex(){
                var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon="+lon+"&exclude=hourly,minutely,alerts&units=metric&appid="+APIKey;
            
                fetch(uvUrl) .then(function (response) {
                    return response.json()
            
                })
                .then(function (data) {
                   console.log(data)
                    var uvi = document.createElement('p')
            
                    uvi.textContent = `UV Index: ${data.current.uvi}`;

                    cityContainer.append(uvi);
            })
            }
        })
        
}

/*function fiveDays(){
    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon="+lon+"&exclude=hourly,minutely,alerts&appid="+APIKey;

    fetch(fiveCast) .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data)
})
}*/
fetchButton.addEventListener('click', searchCity);

