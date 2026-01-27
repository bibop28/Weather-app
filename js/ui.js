const cityNameElem = document.getElementById("cityName");
const tempElem = document.getElementById("temp");
const descriptionElem = document.getElementById("description");
const humidityElem = document.getElementById("humidity");
const windElem = document.getElementById("wind");

export function updateWeatherUI(data) {
    if (!data || data.cod !== 200) {
        alert("City not found!")
        return;
    }

    const weatherResult = document.getElementById("weatherResult");
    weatherResult.style.display = "block";


cityNameElem.textContent = data.name;
tempElem.textContent = `Temperature: ${data.main.temp}°C`;
descriptionElem.textContent = `Weather: ${data.weather[0].description}`;
humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
windElem.textContent = `Wind speed: ${data.wind.speed} m/s`;

}

