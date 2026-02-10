import { getFavourites } from "./favouriteLocalStorage";
import { fetchCountry } from "../countries/countryServices";
import { toggleFavourites } from "./favouriteService";

const panel = document.getElementById("favouritesPanel")!;
const toggle = document.getElementById("favouritesToggle")!;
const content = document.getElementById("favouritesContent")!;

export const renderFavouritesPanel = async () => {
    content.innerHTML = "";

    const favs = getFavourites();

    if (favs.length === 0) {
        panel.classList.remove("open");
        return;
    }

    for (const countryName of favs) {
        try {
            const country = await fetchCountry(countryName);

            const img = document.createElement("img");

            img.src = country.flags.png;
            img.alt = country.name.common;

            img.addEventListener("click", () => {
                toggleFavourites(countryName);

                const heartContainer = document.querySelector(`#heartContainer[data-country="${countryName}"]`) as HTMLElement;
                const heartIcon = heartContainer?.querySelector("img") as HTMLImageElement;

                if (heartIcon && heartContainer) {
                    heartIcon.src = "/assets/icons/heart-svgrepo-com.svg";
                }
                if (panel.classList.contains("open")) {
                    renderFavouritesPanel();
                }
            });

            content.appendChild(img);
        } catch (err) {
            console.error("failed loading favourites:", countryName);
        }
    }
}

toggle.addEventListener("click", async () => {
    const isOpen = panel.classList.toggle("open");
    if(isOpen) {
        await renderFavouritesPanel();
    } else {
        content.innerHTML = "";
    }
});
