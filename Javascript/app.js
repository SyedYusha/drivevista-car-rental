// DriveVista responsive navigation
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menuIcon");
  const nav = document.querySelector("header .navLinks");

  if (!menuButton || !nav) return;

  const icon = menuButton.querySelector("i");

  const setMenuOpen = (open) => {
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("role", "button");
    menuButton.setAttribute("tabindex", "0");
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuButton.setAttribute("aria-expanded", String(open));

    if (icon) {
      icon.classList.toggle("bx-menu", !open);
      icon.classList.toggle("bx-x", open);
    }
  };

  const toggleMenu = () => setMenuOpen(!nav.classList.contains("is-open"));

  menuButton.addEventListener("click", toggleMenu);
  menuButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 1101px)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });

  setMenuOpen(false);
});
