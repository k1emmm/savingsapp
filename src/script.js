document.getElementById("savings").style.display = "flex";

function hideSavingsForm() {
  document.getElementById("savings").style.display = "none";
}

function showSavingsForm() {
  document.getElementById("savings").style.display = "flex";
}

const cards = document.querySelectorAll(".account-card");

function selectCard(selected) {
  cards.forEach((card) => {
    const isSelected = card === selected;

    // Update styles
    card.classList.toggle("ring-2", isSelected);
    card.classList.toggle("ring-blue-400", isSelected);
    card.classList.toggle("ring-offset-2", isSelected);
    card.classList.toggle("ring-offset-zinc-900", isSelected);
    
    // Accessibility state
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => selectCard(card));
});
