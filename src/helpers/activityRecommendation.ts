import { getTempLevel } from "./getTempLevel";
import { getWeatherType, type WeatherType } from "./getWeatherType";
import { recommendations, type TempLevel } from "./activityData";

export function activityRecommendation(weather: string, temp: number): string {
    const level: TempLevel = getTempLevel(temp);
    const type: WeatherType = getWeatherType(weather.toLocaleLowerCase());

    const typeRecommendations = recommendations[type];
    if (!typeRecommendations) return "Enjoy the day";

    return typeRecommendations[level] ?? typeRecommendations["default"];
}