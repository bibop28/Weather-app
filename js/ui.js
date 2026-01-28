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
humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
windElem.textContent = `Wind speed: ${data.wind.speed} m/s`;

const icon = data.weather[0].icon;

const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

descriptionElem.innerHTML = `weather: ${data.weather[0].description} <img src="${iconUrl}" />`;

}

