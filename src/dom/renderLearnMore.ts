import getCountryByCode from "../store/getCountryByCode";
import type Country from "../types/country";
import { elements, getElement } from "./elements";

function renderLearnMore(country: Country): void {
  elements.countryList.innerHTML = "";

  const div = document.createElement("div");
  div.className = "flex flex-col items-center justify-between gap-4 px-24 mb-20";
  div.id = "learn-more";

  const button = document.createElement("button");
  button.onclick = () => {
    getElement<HTMLDivElement>("div#learn-more").remove();
  };
  button.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
  button.textContent = "← Back";

  div.appendChild(button);

  div.insertAdjacentHTML(
    "beforeend",
    `
    <img
      src="${country.flags.svg}" />

      <h1>${country.name.common}</h1>

      <p class="text-sm font-light"><span class="font-medium">Native Name:</span> ${
        Object.values(country.name.nativeName)[0].common
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Population:</span> ${country.population.toLocaleString()}</p>

      <p class="text-sm font-light"><span class="font-medium">Region:</span> ${country.region}</p>

      <p class="text-sm font-light"><span class="font-medium">Sub Region:</span> ${
        country.subregion
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Capital:</span> ${country.capital}</p>

      <p class="text-sm font-light"><span class="font-medium">Top Level Domain:</span> ${
        country.tld
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Currencies:</span> ${Object.keys(
        country.currencies
      ).join(", ")}</p>

      <p class="text-sm font-light">
        <span class="font-medium">Languages:</span> ${Object.values(country.languages).join(", ")}
      </p>
  `
  );

  const borderContainer = document.createElement("div");
  borderContainer.className = "grid items-center grid-cols-4 gap-2";

  country.borders.forEach((border) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
    button.textContent = border;
    button.onclick = async () => {
      getElement<HTMLDivElement>("div#learn-more").remove();
      const country = getCountryByCode(border);
      renderLearnMore(country[0]);
    };
    borderContainer.appendChild(button);
  });

  div.appendChild(borderContainer);

  elements.countryList.insertAdjacentElement("afterend", div);
}

export default renderLearnMore;
