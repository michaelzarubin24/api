import "./style.css";

const header = document.querySelector("header");

header?.addEventListener("click", (e) => {
  const currentButton = e.target;

  if (currentButton.tagName === "BUTTON") {
    const textContent = currentButton.textContent;
    getEndpoint();
  }
});

async function getByEndpoint(endpoit: string, url: string) {
  const response = await fetch(url + endpoint);
}

function getEndpointByText(text: string, searchedEndpoint: string) {
  if (text.includes(searchedEndpoint)) {
  }
}
