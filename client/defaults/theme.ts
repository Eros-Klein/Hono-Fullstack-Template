export function getDefaultTheme() {
    const theme = document.documentElement.getAttribute("data-theme");
    console.log("Default theme:", theme);

    if (!theme) {
        getSystemTheme();
    }
}

export function getSystemTheme() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    console.log("System theme:", theme);
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
}