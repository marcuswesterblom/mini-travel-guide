import type { CountryData } from "./CountryData";

export const fetchCountry = async (countryName:string): Promise<CountryData> => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);

    if(!response.ok) throw new Error("Country wasn't found");

    const data: CountryData[] = await response.json();
    return data[0];
}