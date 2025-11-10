console.log("Instruction JS loaded");

const buttons = document.querySelectorAll(".info-btn");
const boxes = document.querySelectorAll(".info-box");
const titleEl = document.querySelector("#info-title");

function showBox(targetSelector, btn) {
  // Skjul alle bokse + fjern aktiv-stil på knapper
  boxes.forEach((b) => b.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));

  // Vis valgt boks
  const box = document.querySelector(targetSelector);
  if (box) box.classList.add("is-active");

  // Marker valgt knap
  if (btn) btn.classList.add("is-active");

  // Opdatér overskriften til knapteksten (kan ændres hvis du vil)
  if (titleEl && btn) titleEl.textContent = btn.textContent;
}

// Klik-handlers
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showBox(btn.dataset.target, btn);
  });
});

// Start-tilstand (første knap/boks aktiv)
const firstBtn = document.querySelector(".info-btn");
if (firstBtn) showBox(firstBtn.dataset.target, firstBtn);
