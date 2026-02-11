import { fetchWeather } from "./weather/weatherServices";
import { fetchCountry } from "./countries/countryServices";
import { fetchImages } from "./gallery/unsplashServices";
import { createHtml } from "./createHtml";

const form = document.getElementById("container-search") as HTMLFormElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
const header = document.getElementById("header") as HTMLDivElement;

if (resultDiv.children.length === 0) {
        document.body.classList.add("opening");
        header.classList.add("opening");
    } else {
        document.body.classList.remove("opening");
        header.classList.remove("opening");
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();

    if(city) {
        loadTravelGuide(city);
    }
    searchInput.value = "";
});

export async function loadTravelGuide(city: string){
    resultDiv.innerHTML = "Loading...";

    document.body. classList.remove("opening");
    header.classList.remove("opening");
    
    try {
        const weather = await fetchWeather(city);
        const country = await fetchCountry(weather.location.country);
        const images = await fetchImages(city);

        createHtml(resultDiv, weather, country, images);
    } catch (error: any) {
        resultDiv.innerHTML = `Fel: ${error.message}`;
    }
}