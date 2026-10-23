
const menuToggle = document.querySelector("#menu-toggle");
const primaryNavigation = document.querySelector(
  "#primary-navigation"
);

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNavigation.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.innerHTML = isOpen
    ? '<i class="bx bx-x"></i>'
    : '<i class="bx bx-menu"></i>';
});

// Close the menu after selecting a navigation link
primaryNavigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNavigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  });
});
