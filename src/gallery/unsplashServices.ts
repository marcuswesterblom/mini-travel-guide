import { UNSPLASH_ACCESS_KEY } from "../apiKeys";

export const fetchImages = async (query: string): Promise<string[]> => {
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&client_id=${UNSPLASH_ACCESS_KEY}`);

    if (!response.ok) throw new Error("Images can't be found");

    const data = await response.json();
    return data.results.map((img: any) => img.urls.small);
}