import getAllCountries from "../api/getAllCountries";
import type Country from "../types/country";

export const COUNTRIES: Country[] = [];

export async function initializeLocalStorage(): Promise<void> {
  const storedCountries = localStorage.getItem("countries");

  if (storedCountries === null) {
    const fetchedCountries = await getAllCountries();
    localStorage.setItem("countries", JSON.stringify(fetchedCountries));
    COUNTRIES.push(...fetchedCountries);
  } else {
    COUNTRIES.push(...JSON.parse(storedCountries));
  }
}
