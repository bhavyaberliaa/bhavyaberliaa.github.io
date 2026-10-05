(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  let storedTheme;
  try { storedTheme = localStorage.getItem("bhavya-theme"); } catch (_) {}
  const initialTheme = storedTheme === "dark" ? "dark" : "light";

  function setTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Light mode: switch theme" : "Dark mode: switch theme");
    }
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
  }

  setTheme(initialTheme);

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      try { localStorage.setItem("bhavya-theme", nextTheme); } catch (_) {}
    });
  }
}());