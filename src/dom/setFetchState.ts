import { elements } from "./elements";

type Args = [state: "pending"] | [state: "success"] | [state: "error", error: Error];

function setFetchState(...[state, error]: Args): void {
  switch (state) {
    case "pending":
      elements.loadingSpinner.classList.remove("hidden");
      elements.button.disabled = true;
      return;
    case "success":
      elements.loadingSpinner.classList.add("hidden");
      elements.button.disabled = false;
      elements.state.innerHTML = "";
      return;
    case "error":
      elements.state.innerHTML = `
        <p class="text-red-500 text-center">
          ${error.name} ${error.message}
        </p>
      `;
      elements.loadingSpinner.classList.add("hidden");
      elements.button.disabled = false;
      return;
  }
}

export default setFetchState;
