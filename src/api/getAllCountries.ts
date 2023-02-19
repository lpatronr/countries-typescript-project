import Country from "../types/country";

async function getAllCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error(`Error fetching countries: ${res.status}`);
  }

  const countries = await res.json();
  return countries as Country[];
}

export default getAllCountries;
