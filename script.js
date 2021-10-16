var APIKey = "5267211d26e021e31b3419800fbf2329";

var cityContainer = document.getElementById('city-container');
var cityShow = document.getElementById('cityName');
var tempShow = document.getElementById('tempC');
var windShow = document.getElementById('wind');
var humidShow = document.getElementById('humidity');
var fetchButton = document.getElementById('submit');
var city = document.querySelector('.cityInput');


function getCity(){
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=metric&appid=" + APIKey;
fetch(cityUrl)
.then(function(response){
    return response.json()
    
})
.then(function(data){
console.log(data)
 
var cityName = document.createElement('h2');
var tempC = document.createElement('p');
var wind = document.createElement('p');
var humid = document.createElement('p');
//var uv = document.createElement('p');


cityName.textContent = data.name;
tempC.textContent = `Temp: ${data.main.temp} C`;
wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
humid.textContent = `Humidity: ${data.main.humidity}%`;


cityShow.append(cityName);
tempShow.append(tempC);
windShow.append(wind);
humidShow.append(humid);
 

})
}

fetchButton.addEventListener('click', getCity);


