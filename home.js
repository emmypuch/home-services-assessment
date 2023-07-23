// Function to handle the transition when navigating to the modal page
function navigateToModalPage() {
  document.querySelector("body").classList.add("page-transition");
  setTimeout(() => {
    window.location.href = "order-modal.html";
  }, 300); // Change the delay value (in milliseconds) to match your CSS transition duration
}

// Add event listeners to trigger the transition when clicking on the "View Status" link
// Add event listeners to trigger storing data in localStorage and navigating to the modal page
document.querySelector(".icon-2 .text a").addEventListener("click", () => {
  const item = "BBQ Turkey Wings";
  const status = "Being Processed";
  localStorage.setItem("item", item);
  localStorage.setItem("status", status);
  navigateToModalPage();
});
