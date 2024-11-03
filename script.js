document.querySelector(".dropdown-button").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

/* Close the dropdown when clicking outside */
window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropdown-button")) {
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
});