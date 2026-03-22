function loadView(viewName, element) {
  const shell = document.getElementById("content-shell");

  // Update Nav UI
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  element.classList.add("active");

  fetch(`../${viewName}/index.html`)
    .then((response) => response.text())
    .then((html) => {
      shell.innerHTML = html;
    })
    .catch(() => (shell.innerHTML = "<h1>Module Offline</h1>"));
}

function toggleStar(btn) {
  const card = btn.closest(".alert-card");
  const btnFavs = document.getElementById("btn-favs");
  btn.classList.toggle("starred");

  // Auto-remove from Favorites view if unstarred
  if (
    btnFavs &&
    btnFavs.classList.contains("active") &&
    !btn.classList.contains("starred")
  ) {
    card.style.display = "none";
  }
}

function filterAlerts(type) {
  const cards = document.querySelectorAll(".alert-card");
  document
    .getElementById("btn-latest")
    .classList.toggle("active", type === "all");
  document
    .getElementById("btn-favs")
    .classList.toggle("active", type === "favs");

  cards.forEach((card) => {
    const isStarred = card
      .querySelector(".star-btn")
      .classList.contains("starred");
    card.style.display = type === "all" || isStarred ? "flex" : "none";
  });
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
}
