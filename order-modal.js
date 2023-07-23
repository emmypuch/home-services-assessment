// // Function to show the modal with the item and status information
// function showModalWithContent(item, status) {
//   const modalContent = document.querySelector(".modal-container_box");
//   modalContent.innerHTML = `
//         <h2>Order Status</h2>
//         <p>Your ${item} order is ${status}.</p>
//         <a href="#" id="close-modal">
//         <img src="images/Close.svg" alt="Close">
//         </a>
//     `;
//   modal.style.display = "flex";
// }

// // Get the data from localStorage
// const item = localStorage.getItem("item");
// const status = localStorage.getItem("status");

// // Show the modal with the content if data is present
// if (item && status) {
//   showModalWithContent(item, status);
// }

// // Close the modal when the close button is clicked
// document.getElementById("close-modal").addEventListener("click", () => {
//   modal.style.display = "none";
// });
