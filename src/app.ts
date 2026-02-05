import { fetchWeather } from "./weather/weatherServices";
import { fetchCountry } from "./countries/countryServices";
import { fetchImages } from "./gallery/unsplashServices";
import { createHtml } from "./createHtml";

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) loadTravelGuide(city);
});

async function loadTravelGuide(city: string){
    resultDiv.innerHTML = "Loading...";
    try {
        const weather = await fetchWeather(city);
        const country = await fetchCountry(weather.location.country);
        const images = await fetchImages(city);

        createHtml(resultDiv, weather, country, images);
    } catch (error: any) {
        resultDiv.innerHTML = `Fel: ${error.message}`;
    }
}