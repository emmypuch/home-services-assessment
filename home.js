document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Toggle the "active" class to show/hide the answer
      this.classList.toggle("active");

      const answer = this.querySelector(".answer");
      if (this.classList.contains("active")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
