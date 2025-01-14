console.log("Hello World!\n==========\n");

// Exercise 1 Section

const APP_KEY = "XgUi9apSviffD2ENh44TPQYg34e2o8yB";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

let searchBtn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let image = document.getElementById("image");
let paragraph = document.querySelector("p");

//console.log(searchBtn, searchInput, image, paragraph);

searchBtn.addEventListener("click", () => {
  let gifValue = searchInput.value;
  fetch(`${GIPHY_URL}?api_key=${APP_KEY}&s=${gifValue}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(result => {
      image.src = result.data.images.original.url;
      console.log(image);
      searchInput.value = "";
    })
    .catch(error => {
      console.error(error);
      paragraph.textContent = error.message;
    });
});
