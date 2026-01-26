const API_KEY = "aff53ff1056851f30a275e742003dcb2";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
    try {

        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}