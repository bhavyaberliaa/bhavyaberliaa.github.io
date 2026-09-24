(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  const storedTheme = localStorage.getItem("bhavya-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  function setTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
  }

  setTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("bhavya-theme", nextTheme);
      setTheme(nextTheme);
    });
  }
}());