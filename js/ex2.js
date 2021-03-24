
// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];
const countryElement = document.querySelector("input");
const suggestElement = document.getElementById("suggestions");

const createSuggestElement = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;

  element.addEventListener("click", e => {
    countryElement.value = e.target.textContent;
 suggestElement.innerHTML = "";
  });
  return element;
};

countryElement.addEventListener("input", () => {
 suggestElement.innerHTML = "";
  countryList.forEach(country => {
    if (country.startsWith(countryElement.value)) {
     suggestElement.appendChild(createSuggestElement(country));
    }
  });
});
