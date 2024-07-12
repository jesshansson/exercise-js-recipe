//1. Change color of logo text
document.querySelector(".logo-text").style.color = "black";

//2. Header alignment
document.querySelector("header").style.justifyContent = "flex-start";

//3. Change color of Header border
document.querySelector("header").style.borderBottomColor = "lightgray";

//4. Change recipe name
let nameOfRecipeRef = document.getElementById("recipe-name");
nameOfRecipeRef.textContent = "Frozen Cheesecake";

//5. Add material-icons class
let spanTagRef = document.querySelector("span");
spanTagRef.classList.add("material-icons");

//6. Change time estimation
let spanTime = document.querySelector(".time");
spanTime.textContent = "60+ min";

//7. Change img url
let imgRef = document.querySelector("img");
imgRef.src = "assets/frozen-cheesecake-slice.jpg";

//8. Change background color
let ingredientsRef = document.querySelector(".ingredients-container");
ingredientsRef.style.backgroundColor = "#f9f9f9";

//9. Change ingredient list bottom
let ingredientsListBottom = document.querySelector(".ingredients-list-bottom");
ingredientsListBottom.innerHTML = `
  <li>15st digestivetex</li>
  <li>Lite smör</li>
`;

//10. Change ingredient list paste
let ingredientsListPaste = document.querySelectorAll(".ingredients-list-paste li");
ingredientsListPaste[2].textContent = "3tsk vaniljsocker";

//11, Add ingredient to list
let newIngredient = document.querySelector(".ingredients-list-paste");
let newIngredientItem = document.createElement("li");
newIngredientItem.textContent = "400g naturell philadelphiaost";

newIngredient.appendChild(newIngredientItem);

//12. Remove shadow
let shadowBorder = document.querySelector("h3.instructions");
shadowBorder.classList.remove("shadow");

//13. Change two list elements (instructions)
let instructionListItems = document.querySelectorAll(".instructions-list li");

instructionListItems[1].textContent =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionListItems[8].textContent = "Ställ in i frysen över natten.";
