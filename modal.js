"use strict";
const rulesDice = document.querySelector(".Rules_dice");
const modal = document.querySelector(".show_modal");
const closeBtn = document.querySelector(".closeModal");
const overlay = document.querySelector(".overlay");

function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

rulesDice.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", close);

overlay.addEventListener("click", close);

document.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  if (e.key === "Escape") {
    close();
  }
});
