import { elements } from "./dom/elements";
import renderCountries from "./dom/renderCountries";
import { initializeLocalStorage } from "./store/countries";
import getCountriesByQuery from "./store/getCountriesByQuery";
import "./styles.css";

void initializeLocalStorage();

elements.form.onsubmit = async (e) => {
  e.preventDefault();
  const countryName = elements.search.value.trim();

  const countries = getCountriesByQuery(countryName);
  renderCountries(countries);

  /* xmlGetCountries(countryName)
    .then((countries) => {
      setFetchState("success");
      renderCountries(countries);
    })
    .catch((err: FetchError) => {
      setFetchState("error", err);
    }); */

  /* try {
    setFetchState("pending");
    const countries = await getCountriesByQuery(countryName);
    renderCountries(countries);
    setFetchState("success");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setFetchState("error", err);
    }
  } finally {
    elements.search.value = "";
  } */

  elements.search.value = "";
};
