const recipeCards = document.querySelectorAll("#recipes article");
recipeCards.forEach((card) => {
  const button = card.querySelector(".btn");
  const modal = card.querySelector(".recipe-modal");
  if (!modal) return;
  const closeButton = modal.querySelector(".close-recipe");

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});
     