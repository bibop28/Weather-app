function updateWeatherUI(data) {
    if (!data || data.cod !== 200) {
        alert("City not found!")
        return;
    }


cityNameElem.textContent = data.name;
tempElem.textContent = `Temperature: ${data.main.temp}°C`;
descriptionElem.textContent = `Weather: ${data.weather[0].description}`;
humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
windElem.textContent = `Wind speed: ${data.wind.speed} m/s`;

}