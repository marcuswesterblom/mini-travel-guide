import { getFavourites, saveFavourites } from "./favouriteLocalStorage"

export const toggleFavourites = (country: string):string[] => {
    const favs = getFavourites();

    const index = favs.indexOf(country);

    if (index > -1) {
        favs.splice(index, 1);
    } else {
        favs.push(country);
    }

    saveFavourites(favs);
    return favs;
}

export const isFavourite = (country: string) => {
    return getFavourites().includes(country);
}