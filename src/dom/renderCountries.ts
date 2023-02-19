import type Country from "../types/country";
import { elements } from "./elements";
import renderLearnMore from "./renderLearnMore";

function renderCountries(countries: Country[]): void {
  elements.countryList.innerHTML = "";

  countries.forEach((country) => {
    const div = document.createElement("div");
    div.className = "flex flex-col bg-neutral-900 w-72 shadow-lg rounded-lg";

    div.insertAdjacentHTML(
      "beforeend",
      `
      <img
        class="rounded-t-lg"
        src="${country.flags.png}"
      />

      <div class="flex flex-col pl-6 py-4 gap-1">
        <h1 class="text-sm font-medium">${country.name.common}</h1>
        <p class="font-light text-xs">
          <span class="font-medium">Population:</span> ${country.population}
        </p>
        <p class="font-light text-xs"><span class="font-medium">Region:</span> ${country.region}</p>
        <p class="font-light text-xs"><span class="font-medium">Capital:</span> ${country.capital}</p>
      </div>
    `
    );

    const learnMoreButton = document.createElement("button");
    learnMoreButton.onclick = () => {
      renderLearnMore(country);
    };
    learnMoreButton.className = "text-xs font-medium self-end px-6 py-4 hover:animate-pulse";
    learnMoreButton.type = "button";
    learnMoreButton.textContent = "Learn More ➡️";

    div.appendChild(learnMoreButton);

    elements.countryList.appendChild(div);
  });
}

export default renderCountries;
