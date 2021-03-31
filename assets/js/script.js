var searchForm = $("#search-form");
var searchTermEl = $("#city-searched");
var citySpan = $("#city");
var iconSpan = $("#icon");
var listEl = $("#city-list");
var temperatureEl = $("#temperature")
var humidityEl = $("#humidity")
var windEl = $("#wind-speed")
var sectionEl = ("#today-forecast")

function oneDay() {
    searchForm.on("submit", function (event) {
        event.preventDefault();
        var searchTerm = searchTermEl.val();
        var apiKey = "32af9b566fb40383ac2ad9e8afe40987";
        var queryUrl =
            "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
            searchTerm + "&appid=" + apiKey;

        fetch(queryUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                citySpan.text(data.name);
                var dateSpan = moment().format("(l)")
                $("#date").text(dateSpan);
                temperatureEl.text(data.main.temp + " °F");
                humidityEl.text(data.main.humidity + "%");
                windEl.text(data.wind.speed + " MPH");
                // TODO: find UV index 
                listEl.append('<li class="list-item">' + data.name + '</li>');
                // TODO: make list items clickable to bring up search results again
            });
    });
    fiveDay();
};
oneDay();

function fiveDay() {
    console.log("this is 5 day forecast")
}