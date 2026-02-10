const STORAGE_KEY = "travelFavourites";

export const getFavourites = (): string[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export const saveFavourites = (favs: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}