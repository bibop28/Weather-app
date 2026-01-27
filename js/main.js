const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");


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


cityInput.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }

});