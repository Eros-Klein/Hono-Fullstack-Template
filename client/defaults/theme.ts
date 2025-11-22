export function getDefaultTheme() {
    const theme = document.documentElement.getAttribute("data-theme");
    console.log("Current theme:", theme);
}