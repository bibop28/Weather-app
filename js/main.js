const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityNameElem = document.getElementById("cityName");
const tempElem = document.getElementById("temp");
const descriptionElem = document.getElementById("description");
const humidityElem = document.getElementById("humidity");
const windElem = document.getElementById("wind");


import { getWeather } from "./api.js";
import { updateWeatherUI } from "./ui.js";

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city");
        return;
    }

    const weatherData = await getWeather(city);
    updateWeatherUI(weatherData);

});