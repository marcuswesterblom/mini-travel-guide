export interface CountryData {
    name: { common: string };
    capital: string[];
    population: number;
    currencies: Record<string, { name: string; symbol: string }>;
    languages: Record<string, string>;
    flags: { png: string };
}