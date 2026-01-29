const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const container = document.querySelector(".app-container");


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

    container.classList.add('active');
});






cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});