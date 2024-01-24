// let weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`; 
// var geoapi=`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${weatherApiKey}`
 let weatherApiKey = '08c3565d78414f9134bafaeed4808aa7';
https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=08c3565d78414f9134bafaeed4808aa7
// fetch()
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
			
			
// 			fetchWeather(data);
// 		})
// 		.catch(function (error) {
// 			alert('please enter a valid city name');
// 		});

var searchForm = document.getElementById("search-form")
var searchInput = $("#search-input")
var searchBtn = document.getElementById("search-button")
var historyContainer = document.getElementById("history")
var todayContainer = document.getElementById("today")
var forecastContainer = document.getElementById("forecast")
var historyBtn= []

searchBtn.addEventListener("click",searchCity)

function searchCity(e) {
    e.preventDefault()
    var search =searchInput.val().trim()
    console.log(search)
    geoSearch(search)
}
function geoSearch(search){
    console.log(search)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${weatherApiKey}` )
    .then(function (response) {
    	return response.json();
})
.then(function (data) {
	console.log(data)
 
 var lon= data[0].lon
 
 var lat= data[0].lat
 console.log(lat,lon)
})
}