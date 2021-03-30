var searchForm = $("#search-form");
var searchTermEl = $("#city-searched");

searchForm.on("submit", function (event) {
    event.preventDefault();
    // grab search term element out of the input
    var searchTerm = searchTermEl.val();
    console.log(searchTerm);
    var apiKey = "32af9b566fb40383ac2ad9e8afe40987";
    // build the api url with the search term and the api key
    var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm + "&appid=" + apiKey;

    // api call using fetch
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    // convert response from JSON
    // start by console logging the data
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
});

// 32af9b566fb40383ac2ad9e8afe40987