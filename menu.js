// Side Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the side menu
    const sideMenu = document.getElementById('sideMenu');
    const menuButton = document.createElement('button');
    
    // Create menu toggle button
    menuButton.innerHTML = '☰';
    menuButton.className = 'menu-toggle';
    menuButton.onclick = toggleMenu;
    
    // Add menu button to the logo section
    const logoSection = document.querySelector('.logo');
    if (logoSection) {
        logoSection.prepend(menuButton);
    }
    
    // Set initial position for the menu
    if (sideMenu) {
        sideMenu.style.left = '-300px';
    }
});

// Toggle menu function
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (!sideMenu) return;
    
    const currentLeft = sideMenu.style.left;
    
    // Toggle the menu visibility
    if (currentLeft === '0px') {
        sideMenu.style.left = '-300px';
    } else {
        sideMenu.style.left = '0px';
    }
}