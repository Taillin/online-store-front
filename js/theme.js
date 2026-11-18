var savedTheme = 'light';
try {
    if (localStorage.getItem('iaidev-theme') === 'dark') savedTheme = 'dark';
} catch (error) {
}
document.documentElement.setAttribute('data-bs-theme', savedTheme);
