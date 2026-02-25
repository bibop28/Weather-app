const cityNameElem = document.getElementById("cityName");
const tempElem = document.getElementById("temp");
const descriptionElem = document.getElementById("description");
const humidityElem = document.getElementById("humidity");
const windElem = document.getElementById("wind");

export function updateWeatherUI(data) {
    const weatherResult = document.getElementById("weatherResult");
    const container = document.querySelector(".app-container");


    if (!data || data.cod !== 200) {
        weatherResult.classList.remove("show");
        container.classList.remove("active");
        alert("City not found!")
        return;
    }

    weatherResult.classList.add("show");
    container.classList.add("active");


cityNameElem.textContent = data.name;
tempElem.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
windElem.textContent = `Wind speed: ${data.wind.speed} m/s`;

const icon = data.weather[0].icon;

const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

descriptionElem.innerHTML = `weather: ${data.weather[0].description} <img src="${iconUrl}" />`;

}

