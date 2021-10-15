var APIKey = "5267211d26e021e31b3419800fbf2329";
//var city= [];

var fetchButton = document.getElementById('submit');
var city = document.querySelector('.cityInput');


function getCity(){
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=5267211d26e021e31b3419800fbf2329";
fetch(cityUrl)
.then(function(response){
    return response.json()
    
})
.then(function(data){
console.log(data) }
)
}

fetchButton.addEventListener('click', getCity);
