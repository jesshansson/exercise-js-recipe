//1. Name of the recipe
const nameOfRecipeRef = document.getElementById("recipe-name");
const nameOfRecipe = nameOfRecipeRef.textContent;
console.log(`Recipe name: ${nameOfRecipe}`);

//2. HTML tag used to display the Recipe name
let recipeTag = document.getElementById("recipe-name").tagName;
console.log(`Tag used to display recipe name: ${recipeTag}`);

//3. Font size of the paragraph tag "description"

// Hämta det första elementet med klassen "description"
let fontSizeRef = document.getElementsByClassName("description")[0];

// Hämta de beräknade stilarna för elementet
let fontSizeStyle = window.getComputedStyle(fontSizeRef);

// Hämta fontstorleken från de beräknade stilarna
let fontSize = fontSizeStyle.fontSize;

console.log(`Font size of element: ${fontSize}`);

//4. Value of the alt atrribute on the image
let altText = document.querySelector("img").alt;
console.log(`Alt text on image: ${altText}`);

//5. Dimensions and the url of the image
let imgRef = document.querySelector("img");
let imgUrl = imgRef.src;
let imgHeight = imgRef.clientHeight;
let imgWidth = imgRef.clientWidth;

let imgObject = {
  url: imgUrl,
  height: imgHeight,
  width: imgWidth,
};

console.log(imgObject);

//6. Number of ingredients in paste
let pasteIngredients = document.querySelector(".ingredients-list-paste").childElementCount;

console.log(`Number of ingredients in paste: ${pasteIngredients}`);

//7 Fourth element in the paste ingredients list
let fourthElement = document.querySelector(".ingredients-list-paste").children[1];
let fourthElementText = fourthElement.textContent;
console.log(`Fourth ingredient on list is: ${fourthElementText}`);

//8. Array of objects from the instructions
let instructionsRef = document.querySelectorAll(".instructions-list li");

let instructionsArray = [];

instructionsRef.forEach((element, index) => {
  let instructionObject = {
    order: index + 1,
    text: element.textContent.trim(),
  };
  instructionsArray.push(instructionObject);
});

console.log(`Instructions: ${instructionsArray}`);
