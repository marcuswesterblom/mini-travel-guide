import { isFavourite, toggleFavourites } from "./favouriteService";
import { renderFavouritesPanel } from "./favouritesPanel";

export const handleFavouriteClick = (heartContainer: HTMLElement, heartIcon: HTMLImageElement, country: any) => {
        
    const countryName = country.name.common;
    
        const syncHeart = () => {
            const favourite = isFavourite(countryName);
            heartContainer.classList.toggle("active", favourite);
            heartIcon.src = favourite
                ? "/assets/icons/heart-svgrepo-com_fill.svg"
                : "/assets/icons/heart-svgrepo-com.svg";
        };

        syncHeart();

        heartContainer.addEventListener("click", () => {

            toggleFavourites(countryName);
            syncHeart();
            const panel = document.getElementById("favouritesPanel");
            if (panel?.classList.contains("open")) {
                renderFavouritesPanel();
            }

        });
    
}