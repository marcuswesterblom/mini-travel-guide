import { WEATHER_API_KEY } from "../apiKeys";
import type { WeatherData } from "./Weatherdata";

export async function fetchWeather(city: string): Promise<WeatherData> {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=sv`
  );
  if(!res.ok) throw new Error("City wasn't found");
  return res.json();
}