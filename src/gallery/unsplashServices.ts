import { UNSPLASH_ACCESS_KEY } from "../apiKeys";

export async function fetchImages(query: string): Promise<string[]> {
    const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    if (!res.ok) throw new Error("Images can't be found");
    const data = await res.json();
    return data.results.map((img: any) => img.urls.small);
}