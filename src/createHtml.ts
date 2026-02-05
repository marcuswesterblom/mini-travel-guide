import type { WeatherData } from "./weather/Weatherdata";
import type { CountryData } from "./countries/CountryData";
import { activityRecommendation } from "./helpers/helpers";

export function createHtml(
    container: HTMLElement, 
    weather: WeatherData, 
    country: CountryData, 
    imgaes: string[]
) {
    container.innerHTML = "";
    
    // --- Create HTML elements ---
    const countryContainer = document.createElement("div");

    const countryHeader = document.createElement("div");
    const countryTitle = document.createElement("h2");
    const flag = document.createElement("img");
    const flagContainer = document.createElement("div");
    const heartContainer = document.createElement("div");

    const countryInfoContainer = document.createElement("div");

    const capitalContainer = document.createElement("div");
    const locationIconContainer = document.createElement("div");
    const capitalText = document.createElement("p");
    const capitalInfo = document.createElement("h3");

    const populationContainer = document.createElement("div");
    const populationIconContainer = document.createElement("div");
    const populationText = document.createElement("p");
    const populationInfo = document.createElement("h3");

    const languageContainer = document.createElement("div");
    const languageIconContainer = document.createElement("div");
    const languageText = document.createElement("p");
    const languageInfo = document.createElement("h3");

    const currencyContainer = document.createElement("div");
    const currencyIconContainer = document.createElement("div");
    const currencyText = document.createElement("p");
    const currencyInfo = document.createElement("h3");

    const weatherContainer = document.createElement("div");
    const weatherText = document.createElement("p");
    const weatherIconContainer = document.createElement("div");
    const currentWeatherText = document.createElement("p");

// --- Added ID to HTML elements ---
    countryContainer.id = "countryContainer";
    countryHeader.id = "countryHeader";
    flagContainer.id = "flagContainer";
    heartContainer.id = "heartContainer";
    countryTitle.id = "countryTitle";

    countryInfoContainer.id = "countryInfoContainer";
    capitalContainer.id = "capitalContainer";
    locationIconContainer.id = "locationIconContainer";
    capitalText.id = "capitalText";
    capitalInfo.id = "capitalInfo";

    populationContainer.id = "populationContainer";
    populationIconContainer.id = "populationIconContainer";
    populationText.id = "populationText";
    populationInfo.id = "populationInfo";

    languageContainer.id = "languageContainer";
    languageIconContainer.id = "languageIconContainer";
    languageText.id = "languageText";
    languageInfo.id = "languageInfo";

    currencyContainer.id = "currencyContainer";
    currencyIconContainer.id = "currencyIconContainer";
    currencyText.id = "currencyText";
    currencyInfo.id = "currencyInfo";

    weatherContainer.id = "weatherContainer";
    weatherText.id = "weatherText";
    weatherIconContainer.id = "weatherIconContainer";
    currentWeatherText.id = "currentWeatherText";

    flag.src = country.flags.png;
    flag.alt = `Flag ${country.name.common}`;

    countryTitle.textContent = country.name.common;

    capitalText.textContent = "Capital";

    capitalInfo.textContent = country.capital[0];


    populationText.textContent = "Population";

    populationInfo.textContent = country.population.toLocaleString();

    languageText.textContent = "Language";

    languageInfo.textContent = Object.values(country.languages).join(", ");

    currencyText.textContent = "Currency";

    currencyInfo.textContent = Object.values(country.currencies)
        .map(c => `${c.name} (${c.symbol})`)
        .join(", ");

}