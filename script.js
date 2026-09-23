const button = document.querySelector(".btn");
const recipe = document.querySelector(".full-recipe");
const modal = document.querySelector(".recipe-modal");
const closeButton = document.querySelector(".close-recipe");

closeButton.addEventListener("click", () => {
        modal.classList.add("hidden");
        button.textContent = "View Recipe";
});
button.addEventListener("click", () => {
modal.classList.toggle("hidden");

if (modal.classList.contains("hidden")) {
    button.textContent = "View Recipe";
} else {
    button.textContent = "Hide Recipe";
    }
});     