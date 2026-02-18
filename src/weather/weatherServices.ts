import { WEATHER_API_KEY } from "../apiKeys";
import type { WeatherData } from "./Weatherdata";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=eng`);

  if(!response.ok) throw new Error("City wasn't found");

  const data = await response.json();
  return data;
}