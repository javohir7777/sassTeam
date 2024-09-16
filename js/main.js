document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-menus");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
