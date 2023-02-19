import type Country from "../types/country";
import { COUNTRIES } from "./countries";

function getCountriesByQuery(query: string): Country[] {
  return COUNTRIES.filter((country) => country.name.common.includes(query));
}

export default getCountriesByQuery;
