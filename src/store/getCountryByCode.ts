import type Country from "../types/country";
import { COUNTRIES } from "./countries";

function getCountryByCode(code: string): Country[] {
  const country = COUNTRIES.filter((country) => country.cca3 === code);
  return country;
}

export default getCountryByCode;
