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

// const category1 = "Freshwater";
// const category2 = "Large aquarium";
// const category3 = "Plankton Diet";
const productCategories = document.createElement("ul");
productCategories.classList.add("product__categories");
const productCategory_1 = docucment.createElement("li");
productCategory_1.classList.add("prodact_category");
productCategory_1.textContent = "Freshwater";

const productCategory_2 = docucment.createElement("li");
productCategory_2.classList.add("prodact_category");
productCategory_2.textContent = "Large aquarium";

const productCategory_3 = docucment.createElement("li");
productCategory_3.classList.add("prodact_category");
productCategory_3.textContent = "Plankton Diet";

productCategories.append(
  productCategory_1,
  productCategory_2,
  productCategory_3
);

const productDescription = document.createElement("p");
productDescription.classList.add("product__description");
productDescription.textContent = `With their bright colors and deep, laterally compressed bodies, marine 
  angelfishes are some of the more conspicuous residents of the aquarium. 
  The queen angelfish grows to be 45 cm. With neon blue and yellow scales and 
  iridescent purple and orange markings, surprisingly it is not conspicuous, 
  and actually hides very well, and is very shy.`;

productTextContainer.append(productName, productCategories, productDescription);

const productImageContaner = document.createElement("div");
productImageContaner.classList.add("product__image-container");

const productImg = document.createElement("img");
productImg.setAttribute(
  "src",
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640"
);
productImg.classList.add("product__image");

productImageContaner.append(productImg);
productBody.append(productTextContainer);

newProduct.append(productBody);

// body.append(newProduct);
