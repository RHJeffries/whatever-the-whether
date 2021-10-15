var APIKey = "5267211d26e021e31b3419800fbf2329";
var city= [];
var cityUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var fetchButton = document.getElementById('submit');



function getCity(){
    
fetch(cityUrl)
.then(function(response){
    return response.json()
    
})
.then(function(data){
console.log(data) }
)
}

fetchButton.addEventListener('click', getCity);