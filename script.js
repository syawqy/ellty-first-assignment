const allPagesCheckbox = document.querySelector(".header .checkbox");
const pageCheckboxes = document.querySelectorAll(".checkbox-group .checkbox");

function toggleAllCheckboxes(checked) {
  pageCheckboxes.forEach((checkbox) => (checkbox.checked = checked));
}

function updateAllPagesCheckbox() {
  allPagesCheckbox.checked = Array.from(pageCheckboxes).every((cb) => cb.checked);
}

allPagesCheckbox.addEventListener("change", () => {
  toggleAllCheckboxes(allPagesCheckbox.checked);
});

pageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateAllPagesCheckbox);
});