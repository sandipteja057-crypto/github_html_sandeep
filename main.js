 // Toggle mobile menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Handle form submission
const form = document.querySelector(".booking-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your trip has been booked successfully!");
    form.reset();
  });
}
