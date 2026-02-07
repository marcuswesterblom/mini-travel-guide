
export type WeatherType = "sun" | "rain" | "cloud" | "snow" | "clear" | "thunder" | "fog";

export function getWeatherType(w:string): WeatherType {
    if (w.includes("thunder")) return "thunder";
    if (w.includes("fog")) return "fog";
    if (w.includes("snow")) return "snow";
    if (w.includes("rain")) return "rain";
    if (w.includes("cloud")) return "cloud";
    if (w.includes("sun")) return "sun";
    if (w.includes("clear")) return "clear";
    return "sun";
}