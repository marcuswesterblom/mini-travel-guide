import { fetchWeather } from "./weather/weatherServices";
import { fetchCountry } from "./countries/countryServices";
import { fetchImages } from "./gallery/unsplashServices";
import { createHtml } from "./createHtml";

const form = document.getElementById("container-search") as HTMLFormElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if(city) {
        loadTravelGuide(city);
    }
    searchInput.value = "";
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