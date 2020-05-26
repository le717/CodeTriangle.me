// Detect if the user wants a light theme
const themeLight = window.matchMedia("(prefers-color-scheme: light)");


function applyLightTheme() {
  document.body.classList.replace("dark", "light");
}

function applyDarkTheme() {
  document.body.classList.replace("light", "dark");
}

/**
 * Used to set the light theme on page load, if needed.
 */
export function letThereBeLight() {
  if (themeLight.matches) {
    applyLightTheme();
  }
}

// Listen for theme changes
themeLight.addListener(e => {
  (e.matches ? applyLightTheme : applyDarkTheme)();
});
