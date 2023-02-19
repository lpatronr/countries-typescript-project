export function getElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (element === null) throw new Error(`Element not found: ${selector}`);

  return element;
}

export const elements = {
  form: getElement<HTMLFormElement>("form"),
  search: getElement<HTMLInputElement>("#search"),
  loadingSpinner: getElement<SVGElement>("#loading-spinner"),
  countryList: getElement<HTMLDivElement>("#country-list"),
  state: getElement<HTMLDivElement>("#state"),
  button: getElement<HTMLButtonElement>("button[type=submit]"),
};
