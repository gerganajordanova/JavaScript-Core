function attachEvents() {
    let url = 'https://judgetests.firebaseio.com/';
    $('#submit').click(getWeather);
    let inputTown = $('#location');
    let table = $('#forecast');

    function getWeather() {

        $.ajax({
            method: 'GET',
            url: url + 'locations.json'
        }).then(loadWeatherForecast).catch(handleError);

        function loadWeatherForecast(locations) {
            let location = locations.filter(l => l.name === inputTown.val())[0];

            let todayForecast = $.ajax({
                method: 'GET',
                url: url + 'forecast/today/' + `${location.code}.json`
            });

            let upcomingForecast = $.ajax({
                method: 'GET',
                url: url + 'forecast/upcoming/' + `${location.code}.json`
            });

            Promise.all([todayForecast, upcomingForecast]).then(displayWeather).catch(handleError);
        }

        function displayWeather([todayWeather, upcomingWeather]) {
            let icons = {
                ['Sunny']: '&#x2600;',
                ['Partly sunny']: '&#x26C5;',
                ['Overcast']: '&#x2601;',
                ['Rain']: '&#x2614;',
                ['Degrees']: '&#176;'
            };

            $('#current')
                .append($('<span>').addClass("condition symbol").html(icons[todayWeather.forecast.condition]))
                .append($('<span>').addClass("condition")
                    .append(`<span class="forecast-data">${todayWeather.name}</span>`)
                    .append(`<span class="forecast-data">${todayWeather.forecast.low}${icons.Degrees}/${todayWeather.forecast.high}${icons.Degrees}</span>`)
                    .append(`<span class="forecast-data">${todayWeather.forecast.condition}</span>`));
            for (let forecast of upcomingWeather.forecast) {
                $('#upcoming')
                    .append($('<span>').addClass("upcoming")
                        .append($('<span>').addClass("symbol").html(icons[forecast.condition]))
                        .append($('<span>').addClass("forecast-data").html(`${forecast.low}${icons.Degrees}/${forecast.high}${icons.Degrees}`))
                        .append($('<span>').addClass("forecast-data").text(forecast.condition)));
            }
            table.css("display", "block");
            inputTown.val('');

        }

        function handleError(error) {
            table.html(`${error}`);
            table.css("display", "block");
        }


    }
    
}