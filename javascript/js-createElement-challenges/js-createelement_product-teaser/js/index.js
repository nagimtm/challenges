console.clear();

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
productName.textContent = "Queen Angelfish";

// const category1 = "Freshwater";
// const category2 = "Large aquarium";
// const category3 = "Plankton Diet";
const productCategories = document.createElement("ul");

productCategories.classList.add("product__categories");

const productCategory_1 = document.createElement("li");

productCategory_1.classList.add("product__category");
productCategory_1.textContent = "Freshwater";

const productCategory_2 = document.createElement("li");

productCategory_2.classList.add("product__category");
productCategory_2.textContent = "Large Aquarium";

const productCategory_3 = document.createElement("li");

productCategory_3.classList.add("product__category");
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

productBody.append(productTextContainer, productImageContaner);

const productFooter = document.createElement("footer");
productFooter.classList.add("product__footer");

const productPrice = document.createElement("span");
productPrice.classList.add("product__price");
productPrice.textContent = "149,99 €";

const buyButton = document.createElement("button");
buyButton.classList.add("product__buy-button");
buyButton.setAttribute("type", "submit");
buyButton.textContent = "Buy";

productFooter.append(productPrice, buyButton);
newProduct.append(productBody, productFooter);

const body = document.querySelector("body");
body.append(newProduct);
