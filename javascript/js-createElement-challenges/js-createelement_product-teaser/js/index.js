console.clear();

const body = document.querySelector("body");

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newProduct = document.createElement("article");
newProduct.classList.add("product");

const productBody = document.createElement("div");
productBody.classList.add("product__body");

const productTextContainer = document.createElement("div");
productTextContainer.classList.add("product__text-container");

const productName = document.createElement("h2");
productName.textContent = "Queen angelfish";

productTextContainer.append(productName);
productBody.append(productTextContainer);

newProduct.append(productBody);
