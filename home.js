document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal-trigger");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");

  modalTrigger.addEventListener("click", function (event) {
    event.preventDefault();

    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal-trigger-cleaning");
  const modal = document.getElementById("modalcleaning");
  const closeBtn = document.getElementById("close-btn");

  modalTrigger.addEventListener("click", function (event) {
    event.preventDefault();

    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
