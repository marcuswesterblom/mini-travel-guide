import type { WeatherData } from "./weather/Weatherdata";
import type { CountryData } from "./countries/CountryData";
import { activityRecommendation } from "./helpers/activityRecommendation";

export function createHtml(
    container: HTMLElement, 
    weather: WeatherData, 
    country: CountryData, 
    images: string[]
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
    const capitalIconContainer = document.createElement("div");
    const capitalText = document.createElement("p");
    const capitalInfo = document.createElement("h3");
    const capitalTextContainer = document.createElement("div");

    const capitalIcon = document.createElement("img");
    const populationIcon = document.createElement("img");
    const languageIcon = document.createElement("img");
    const currencyIcon = document.createElement("img");

    const populationContainer = document.createElement("div");
    const populationIconContainer = document.createElement("div");
    const populationText = document.createElement("p");
    const populationInfo = document.createElement("h3");
    const populationTextContainer = document.createElement("div");

    const languageContainer = document.createElement("div");
    const languageIconContainer = document.createElement("div");
    const languageText = document.createElement("p");
    const languageInfo = document.createElement("h3");
    const languageTextContainer = document.createElement("div");

    const currencyContainer = document.createElement("div");
    const currencyIconContainer = document.createElement("div");
    const currencyText = document.createElement("p");
    const currencyInfo = document.createElement("h3");
    const currencyTextContainer = document.createElement("div");

    const lineBreak = document.createElement("span");

    // WEATHER
    const localTime = document.createElement("p");
    const weatherContainer = document.createElement("div");
    const weatherDegreeContainer = document.createElement("div");
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
    capitalIconContainer.id = "capitalIconContainer";
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

    lineBreak.id = "break";

    // WEATHER
    weatherContainer.id = "weatherContainer";
    weatherDegreeContainer.id = "weatherDegreeContainer";
    localTime.id = "localTime";
    weatherText.id = "weatherText";
    weatherIconContainer.id = "weatherIconContainer";
    temp.id = "temp";
    tips.id = "tips";
    currentWeatherText.id = "currentWeatherText";

    // ICONS
    heartIcon.id = "svg";
    capitalIcon.id = "svg";
    populationIcon.id = "svg";
    languageIcon.id = "svg";
    currencyIcon.id = "svg";
    
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

    heartIcon.src = "/assets/icons/heart-svgrepo-com.svg";
    capitalIcon.src = "/assets/icons/location-pin-svgrepo-com.svg";
    populationIcon.src = "/assets/icons/users-svgrepo-com.svg";
    languageIcon.src = "/assets/icons/annotation-svgrepo-com.svg";
    currencyIcon.src = "/assets/icons/dollar-sign-svgrepo-com.svg";

    // WEATHER
    localTime.textContent = weather.location.localtime;
    weatherText.textContent = `Current weather in ${weather.location.name}`; 
    weatherIcon.src = weather.current.condition.icon;
    weatherIcon.alt = weather.current.condition.text;
    temp.textContent = `${weather.current.temp_c}°C`;
    currentWeatherText.textContent = weather.current.condition.text;
    tips.textContent = activityRecommendation(
        weather.current.condition.text,
        weather.current.temp_c
    );

    // GALLERY
    const galleryTitle = document.createElement("h3");
    galleryTitle.textContent = `Photos from ${weather.location.name}`;

    const imagesContainer = document.createElement("div");
    imagesContainer.appendChild(galleryTitle);
    imagesContainer.id = "imagesContainer";
    images.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = `${weather.location.name}`;
        imagesContainer.appendChild(img);
    });

//--- APPEND ---

    // ICON CONTAINERS
    heartContainer.appendChild(heartIcon);

    capitalIconContainer.appendChild(capitalIcon);
    populationIconContainer.appendChild(populationIcon);
    languageIconContainer.appendChild(languageIcon);
    currencyIconContainer.appendChild(currencyIcon);

    weatherIconContainer.appendChild(weatherIcon);

    // INFO BLOCKS
    capitalTextContainer.append(
        capitalText,
        capitalInfo
    );

    capitalContainer.append(
        capitalIconContainer,
        capitalTextContainer
    );

      populationTextContainer.append(
        populationText,
        populationInfo
    );

    populationContainer.append(
        populationIconContainer,
        populationTextContainer
    );

      languageTextContainer.append(
        languageText,
        languageInfo
    );

    languageContainer.append(
        languageIconContainer,
        languageTextContainer
    );

      currencyTextContainer.append(
        currencyText,
        currencyInfo
    );

    currencyContainer.append(
        currencyIconContainer,
        currencyTextContainer
    );

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
        currencyContainer,
        lineBreak
    );

    weatherDegreeContainer.append(
        weatherIconContainer,
        temp
    )

    weatherContainer.append(
        localTime,
        weatherText,
        weatherDegreeContainer,
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
        imagesContainer
    );

}