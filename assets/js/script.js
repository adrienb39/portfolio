const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
    // le mode sombre est activé
} else {
    // le mode sombre n'est pas activé
}