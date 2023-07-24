// Function to show the modal
function showModal() {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.style.display = "none";
}

// Event listener to the "close" link
const closeModalLink = document.getElementById("close-modal");
closeModalLink.addEventListener("click", closeModal);

// Event listener to the "close" image
const closeModalImage = document.querySelector("#close-modal img");
closeModalImage.addEventListener("click", closeModal);
