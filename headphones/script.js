document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  menuBtn.addEventListener("change", function () {
    if (menuBtn.checked) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });

  // Optional: Hide nav menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuBtn.checked = false;
      nav.style.display = "none";
    });
  });
});
