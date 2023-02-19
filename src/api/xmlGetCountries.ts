import type Country from "../types/country";

export type FetchError = {
  status: number;
  statusText: string;
};

async function xmlGetCountries(countryName: string): Promise<Country[]> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
    request.send();

    request.onload = () => {
      if (request.status === 200) {
        const countries: Country[] = JSON.parse(request.response);
        resolve(countries);
      } else {
        const error: FetchError = {
          status: request.status,
          statusText: request.statusText,
        };
        reject(error);
      }
    };

    request.onerror = () => {
      reject({
        status: request.status,
        statusText: request.statusText,
      });
    };
  });
}

export default xmlGetCountries;
