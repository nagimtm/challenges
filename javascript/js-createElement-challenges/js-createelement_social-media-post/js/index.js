console.clear();

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const socialMediaPost = document.createElement("article");
socialMediaPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");

postContent.textContent =
  "Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of `document.createElement()` instead.";

socialMediaPost.append(postContent);

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username2";

footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.setAttribute("data-js", "like-button2");
button.setAttribute("type", "button");
button.textContent = "♥ Like";

footer.append(button);

socialMediaPost.append(footer);

const body = document.querySelector("body");

body.append(socialMediaPost);

const likeButton2 = document.querySelector('[data-js="like-button2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
