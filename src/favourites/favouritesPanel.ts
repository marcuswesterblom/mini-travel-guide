import { getFavourites } from "./favouriteLocalStorage";
import { fetchCountry } from "../countries/countryServices";
import { loadTravelGuide } from "../app";
import { isFavourite, toggleFavourites } from "./favouriteService";
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
            const removeContainer = document.createElement("div");
            const removeSpan1 = document.createElement("span");
            const removeSpan2 = document.createElement("span");
            const img = document.createElement("img");
            const imgContainer = document.createElement("div");

            imgContainer.id = "imgContainer";
            removeContainer.id = "removeContainer";
            removeSpan1.id = "removeSpan1";
            removeSpan2.id = "removeSpan2";

            img.src = country.flags.png;
            img.alt = country.name.common;

            img.addEventListener("click", async () => {
                await loadTravelGuide(countryName);

                panel.classList.remove("open");
                if (panel.classList.contains("open")) {
                    renderFavouritesPanel();
                }
            });

            removeContainer.addEventListener("click", () => {
                toggleFavourites(countryName);
                renderFavouritesPanel();

                const heartContainerInView = document.querySelector(
                    `#heartContainer[data-country="${countryName}"]`
                )as HTMLElement;
                const heartIconInView = heartContainerInView?.querySelector("img") as HTMLImageElement;

                if(heartContainerInView && heartIconInView) {
                    const favourite = isFavourite(countryName);
                    heartContainerInView.classList.toggle("active", favourite);
                    heartIconInView.src = favourite
                        ? "/assets/icons/heart-svgrepo-com_fill.svg"
                        : "/assets/icons/heart-svgrepo-com.svg";
                }
            });

            removeContainer.append(
                removeSpan1,
                removeSpan2
            );
            imgContainer.append(
                removeContainer,
                img
            );
            content.appendChild(imgContainer);

        } catch (err) {
            console.error("failed loading favourites:", countryName);
        }
    }
}

toggle.addEventListener("click", async () => {
    const isOpen = panel.classList.toggle("open");
    if(isOpen) {
        await renderFavouritesPanel();
    }
});
