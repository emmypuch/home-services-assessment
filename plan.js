// Expand Details
const expandLinks = document.querySelectorAll(".expandLink");
const additionalInfos = document.querySelectorAll(".additional-info");

expandLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    additionalInfos[index].classList.toggle("hidden");
  });
});

// Choose Date
document.addEventListener("DOMContentLoaded", function () {
  const dateToggle = document.getElementById("date-toggle");
  const dateInputContainer = document.getElementById("date-input-container");

  dateToggle.addEventListener("click", function () {
    dateInputContainer.style.display = "block";
  });

  // Hide the date input when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !dateInputContainer.contains(event.target) &&
      event.target !== dateToggle
    ) {
      dateInputContainer.style.display = "none";
    }
  });
});

// Remove Code
document.addEventListener("DOMContentLoaded", function () {
  const codeContainer = document.getElementById("codeContainer");
  const codeParagraph = document.getElementById("code");
  const successParagraph = document.querySelector(".code");

  const removeCodeBtn = document.getElementById("removeCodeBtn");
  removeCodeBtn.addEventListener("click", function () {
    codeContainer.removeChild(codeParagraph);
    successParagraph.classList.remove("hidden");
  });
});
