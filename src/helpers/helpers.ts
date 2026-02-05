export function activityRecommendation(weather: string): string {
    const w = weather.toLowerCase();
    if (w.includes("sun") || w.includes("klart")) return "Perfect day for a walk in the park!";
    if (w.includes("rain") || w.includes("regn")) return "Visit a museum or a café";
    if (w.includes("cloud") || w.includes("mulet")) return "Take a walk but bring a jacket!";
    return "Enjoy the day";
}