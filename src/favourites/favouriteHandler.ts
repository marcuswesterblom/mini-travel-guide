import { isFavourite, toggleFavourites } from "./favouriteService";
import { renderFavouritesPanel } from "./favouritesPanel";

export const handleFavouriteClick = (heartContainer: HTMLElement, heartIcon: HTMLImageElement, country: any) => {
        
    const countryName = country.name.common;
    
        if (isFavourite(countryName)) {
            heartIcon.src = "/assets/icons/heart-svgrepo-com_fill.svg";
        }
        heartContainer.addEventListener("click", () => {
    
            toggleFavourites(countryName);
    
            if (isFavourite(countryName)) {
                heartContainer.classList.add("active");
                heartIcon.src = "/assets/icons/heart-svgrepo-com_fill.svg";
            } else {
                heartContainer.classList.remove("active");
                heartIcon.src = "/assets/icons/heart-svgrepo-com.svg";
            }
            const panel = document.getElementById("favouritesPanel");
            if (panel?.classList.contains("open")) {
                renderFavouritesPanel();
            }
        });
    
}