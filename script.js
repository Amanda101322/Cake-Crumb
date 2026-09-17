const button = document.querySelector(".btn");
const recipe = document.querySelector(".full-recipe");
button.addEventListener("click", () => {
recipe.classList.toggle("hidden");
if (recipe.classList.contains("hidden")) {
    button.textContent = "View Recipe";
} else {
    button.textContent = "Hide Recipe";
    }
});