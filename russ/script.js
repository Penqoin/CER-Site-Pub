// JavaScript for theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button and theme icons
    const themeToggle = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const favicon = document.getElementById('favicon');

    // Set initial theme based on local storage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    // Add event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        // Get the current theme
        let theme = document.documentElement.getAttribute('data-theme');

        // Toggle between light and dark themes
        if (theme === 'light') {
            theme = 'dark';
        } else {
            theme = 'light';
        }

        // Apply the new theme to the document
        document.documentElement.setAttribute('data-theme', theme);

        // Save the user's preference to local storage
        localStorage.setItem('theme', theme);

        // Update the icon based on the current theme
        updateIcon(theme);
    });

    // Function to update the displayed icon based on the current theme
    function updateIcon(theme) {
        if (theme === 'dark') {
            favicon.href = '../img/Trippel-C-hvit.svg';
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        } else {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
            favicon.href = '../img/Trippel-C-hvit.svg';
        }
    }
});
