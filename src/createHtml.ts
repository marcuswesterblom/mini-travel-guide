import type { WeatherData } from "./weather/Weatherdata";
import type { CountryData } from "./countries/CountryData";
import { activityRecommendation } from "./helpers/helpers";
import heartIconSvg from "../public/assets/icons/heart-svgrepo-com.svg";
import locationIconSvg from "../public/assets/icons/location-pin-svgrepo-com.svg";
import populationIconSvg from "../public/assets/icons/users-svgrepo-com.svg";
import languageIconSvg from "../public/assets/icons/annotation-svgrepo-com.svg";
import currencyIconSvg from "../public/assets/icons/dollar-sign-svgrepo-com.svg";

export function createHtml(
    container: HTMLElement, 
    weather: WeatherData, 
    country: CountryData, 
    imgaes: string[]
) {
    container.innerHTML = "";

    // --- Create HTML elements ---

    // COUNTRIES
    const countryContainer = document.createElement("div");

    const countryHeader = document.createElement("div");
    const countryTitle = document.createElement("h2");
    const flag = document.createElement("img");
    const flagContainer = document.createElement("div");
    const heartIcon = document.createElement("img");
    const heartContainer = document.createElement("div");

    const countryInfoContainer = document.createElement("div");

    const capitalContainer = document.createElement("div");
    const locationIconContainer = document.createElement("div");
    const capitalText = document.createElement("p");
    const capitalInfo = document.createElement("h3");

    const locationIcon = document.createElement("img");
    const populationIcon = document.createElement("img");
    const languageIcon = document.createElement("img");
    const currencyIcon = document.createElement("img");

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

    // WEATHER
    const localTime = document.createElement("p");
    const weatherContainer = document.createElement("div");
    const weatherText = document.createElement("p");
    const weatherIcon = document.createElement("img");
    const weatherIconContainer = document.createElement("div");
    const temp = document.createElement("p");
    const tips = document.createElement("p");
    const currentWeatherText = document.createElement("p");

    // GALLERY

// --- Added ID to HTML elements ---

    // COUNTRIES
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
    localTime.id = "localTime";
    currencyIconContainer.id = "currencyIconContainer";
    currencyText.id = "currencyText";
    currencyInfo.id = "currencyInfo";

    // WEATHER
    weatherContainer.id = "weatherContainer";
    localTime.id = "localTime";
    weatherText.id = "weatherText";
    weatherIconContainer.id = "weatherIconContainer";
    temp.id = "temp";
    tips.id = "tips";
    currentWeatherText.id = "currentWeatherText";

    // GALLERY

// --- Apply data to HTML elements ---

    // COUNTRIES
    flag.src = country.flags.png;
    flag.alt = `Flag ${country.name.common}`;
    flag.dataset.country = country.name.common;

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

    // ICONS

    heartIcon.src = heartIconSvg;
    locationIcon.src = locationIconSvg;
    populationIcon.src = populationIconSvg;
    languageIcon.src = languageIconSvg;
    currencyIcon.src = currencyIconSvg;

    // WEATHER
    localTime.textContent = weather.location.localtime;
    weatherText.textContent = `Current weather in ${weather.location.name}`; 
    weatherIcon.src = weather.current.condition.icon;
    weatherIcon.alt = weather.current.condition.text;
    temp.textContent = `${weather.current.temp_c}°C`;
    currentWeatherText.textContent = weather.current.condition.text;
    tips.textContent = activityRecommendation(weather.current.condition.text);

    // GALLERY
    const galleryTitle = document.createElement("h3");
    galleryTitle.textContent = `Photos from ${weather.location.name}`;

    const imagesContainer = document.createElement("div");
    imagesContainer.id = "imagesContainer";
    imgaes.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = `${weather.location.name}`;
        imagesContainer.appendChild(img);
    });

//--- APPEND ---

    // ICON CONTAINERS
    heartContainer.appendChild(heartIcon);

    locationIconContainer.appendChild(locationIcon);
    populationIconContainer.appendChild(populationIcon);
    languageIconContainer.appendChild(languageIcon);
    currencyIconContainer.appendChild(currencyIcon);

    weatherIconContainer.appendChild(weatherIcon);

    // INFO BLOCKS
    capitalContainer.append(
        locationIconContainer,
        capitalText,
        capitalInfo
    );

    populationContainer.append(
        populationIconContainer,
        languageText,
        languageInfo
    );

    languageContainer.append(
        languageIconContainer,
        languageText,
        languageInfo
    );

    currencyContainer.append(
        currencyIconContainer,
        currencyText,
        currencyInfo
    );

    currencyContainer.append

    flagContainer.appendChild(flag);

    countryHeader.append(
        flagContainer, 
        countryTitle,
        heartContainer
    );

    countryInfoContainer.append(
        capitalContainer,
        populationContainer,
        languageContainer,
        currencyContainer
    );

    weatherContainer.append(
        localTime,
        weatherText,
        weatherIconContainer,
        temp,
        currentWeatherText,
        tips
    );

    countryContainer.append(
        countryHeader,
        countryInfoContainer,
        weatherContainer
    );

    container.append(
        countryContainer,
        weatherContainer,
        galleryTitle,
        imagesContainer
    );

}