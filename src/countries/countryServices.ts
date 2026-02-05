import type { CountryData } from "./CountryData";

export async function fetchCountry(countryName:string): Promise<CountryData> {
    const rest = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    if(!rest.ok) throw new Error("Country wasn't found");
    const data: CountryData[] = await rest.json();
    return data[0];
}