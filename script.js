var APIKey = "5267211d26e021e31b3419800fbf2329";

var cityContainer = document.getElementById('city-container');

var fetchButton = document.getElementById('submit');
var city = document.querySelector('.cityInput');



function searchCity() {
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
            today.textContent = moment.unix(data.dt).format("MMM Do, YYYY");
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
            uvIndex(lat, lon);
            firstDay(lat, lon);
            secondDay(lat, lon);
            thirdDay(lat, lon);
            fourthDay(lat, lon);
            fifthDay(lat, lon);




        })

};

function uvIndex(lat, lon) {
    var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(uvUrl).then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data)
            var uvi = document.createElement('p')

            uvi.textContent = `UV Index: ${data.current.uvi}`;

            cityContainer.append(uvi);
        })
};

function firstDay(lat, lon) {

    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(fiveCast).then(function (forecast) {
            return forecast.json()

        })
        .then(function (data) {
            console.log(data)

            

            // variables for creating elements

            var forecastDays = document.getElementById('forecastOne');
            var showIconDays = document.getElementById('iconOne')

            var tempCDays = document.getElementById('tempCOne');
            var windDays = document.getElementById('windOne');
            var humidDays = document.getElementById('humidOne');

            // attaching data found

            forecastDays.textContent = moment.unix(data.daily[1].dt).format("MMM Do, YYYY");
            showIconDays.setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`);

            tempCDays.textContent = `Temp: ${data.daily[1].temp.max} C`;
            windDays.textContent = `Wind speed: ${data.daily[1].wind_speed} m/s`;
            humidDays.textContent = `Humidity: ${data.daily[1].humidity}%`;

            
            // appending to container

            forecastOne.append(forecastDays);
            iconOne.append(showIconDays);

            tempCOne.append(tempCDays);
            windOne.append(windDays);
            humidOne.append(humidDays);

        })
};


function secondDay(lat, lon) {

    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(fiveCast).then(function (forecast) {
            return forecast.json()

        })
        .then(function (data) {
            console.log(data)

           

            // variables for creating elements

            var forecastDays = document.getElementById('forecastTwo');
            var showIconDays = document.getElementById('iconTwo')

            var tempCDays = document.getElementById('tempCTwo');
            var windDays = document.getElementById('windTwo');
            var humidDays = document.getElementById('humidTwo');

            // attaching data found

            forecastDays.textContent = moment.unix(data.daily[2].dt).format("MMM Do, YYYY");
            showIconDays.setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`);

            tempCDays.textContent = `Temp: ${data.daily[2].temp.max} C`;
            windDays.textContent = `Wind speed: ${data.daily[2].wind_speed} m/s`;
            humidDays.textContent = `Humidity: ${data.daily[2].humidity}%`;

            // appending to container
            forecastTwo.append(forecastDays);
            iconTwo.append(showIconDays);

            tempCTwo.append(tempCDays);
            windTwo.append(windDays);
            humidTwo.append(humidDays);

        })
};

function thirdDay(lat, lon) {

    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(fiveCast).then(function (forecast) {
            return forecast.json()

        })
        .then(function (data) {
            console.log(data)

           

            // variables for creating elements

            var forecastDays = document.getElementById('forecastThree');
            var showIconDays = document.getElementById('iconThree')

            var tempCDays = document.getElementById('tempCThree');
            var windDays = document.getElementById('windThree');
            var humidDays = document.getElementById('humidThree');

            // attaching data found

            forecastDays.textContent = moment.unix(data.daily[3].dt).format("MMM Do, YYYY");
            showIconDays.setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`);

            tempCDays.textContent = `Temp: ${data.daily[3].temp.max} C`;
            windDays.textContent = `Wind speed: ${data.daily[3].wind_speed} m/s`;
            humidDays.textContent = `Humidity: ${data.daily[3].humidity}%`;

            // appending to container
            forecastThree.append(forecastDays);
            iconThree.append(showIconDays);

            tempCThree.append(tempCDays);
            windThree.append(windDays);
            humidThree.append(humidDays);

        })
};

function fourthDay(lat, lon) {

    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(fiveCast).then(function (forecast) {
            return forecast.json()

        })
        .then(function (data) {
            console.log(data)

           

            // variables for creating elements

            var forecastDays = document.getElementById('forecastFour');
            var showIconDays = document.getElementById('iconFour')

            var tempCDays = document.getElementById('tempCFour');
            var windDays = document.getElementById('windFour');
            var humidDays = document.getElementById('humidFour');

            // attaching data found

            forecastDays.textContent = moment.unix(data.daily[4].dt).format("MMM Do, YYYY");
            showIconDays.setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`);

            tempCDays.textContent = `Temp: ${data.daily[4].temp.max} C`;
            windDays.textContent = `Wind speed: ${data.daily[4].wind_speed} m/s`;
            humidDays.textContent = `Humidity: ${data.daily[4].humidity}%`;

            // appending to container
            forecastFour.append(forecastDays);
            iconFour.append(showIconDays);

            tempCFour.append(tempCDays);
            windFour.append(windDays);
            humidFour.append(humidDays);

        })
};

function fifthDay(lat, lon) {

    var fiveCast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=metric&appid=" + APIKey;

    fetch(fiveCast).then(function (forecast) {
            return forecast.json()

        })
        .then(function (data) {
            console.log(data)

            

            // variables for creating elements

            var forecastDays = document.getElementById('forecastFive');
            var showIconDays = document.getElementById('iconFive')

            var tempCDays = document.getElementById('tempCFive');
            var windDays = document.getElementById('windFive');
            var humidDays = document.getElementById('humidFive');

            // attaching data found

            forecastDays.textContent = moment.unix(data.daily[5].dt).format("MMM Do, YYYY");
            showIconDays.setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`);

            tempCDays.textContent = `Temp: ${data.daily[5].temp.max} C`;
            windDays.textContent = `Wind speed: ${data.daily[5].wind_speed} m/s`;
            humidDays.textContent = `Humidity: ${data.daily[5].humidity}%`;

            // appending to container
            forecastFive.append(forecastDays);
            iconFive.append(showIconDays);

            tempCFive.append(tempCDays);
            windFive.append(windDays);
            humidFive.append(humidDays);

        })
};

fetchButton.addEventListener('click', searchCity);