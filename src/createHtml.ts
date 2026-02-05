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

}