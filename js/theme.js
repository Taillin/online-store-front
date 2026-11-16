// Read the saved theme before the page is drawn.
var savedTheme = 'light';
try {
    if (localStorage.getItem('iaidev-theme') === 'dark') savedTheme = 'dark';
} catch (error) {
    // The light theme also works when browser storage is disabled.
}
document.documentElement.setAttribute('data-bs-theme', savedTheme);
