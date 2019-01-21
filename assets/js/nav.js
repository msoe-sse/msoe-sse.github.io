const MOBILE_WIDTH_BREAKPOINT = 770;

/* Hides or displays the nav menu items based on the size of the screen. */
window.addEventListener('resize', function() {
    const navItems = document.getElementById('menu-items');
    if (window.innerWidth > MOBILE_WIDTH_BREAKPOINT) {
        navItems.style.display = "block";
   } else {
       navItems.style.display = "none";
   }
});

/**
 *  Hides the navigation menu items on mobile unless the user clicks on a link.
 */
function hideNav() {
    const navItems = document.getElementById('menu-items');
    const items = document.querySelectorAll(':hover');
    const hoveredItem = items.item(items.length - 1);
    if (hoveredItem.tagName != 'A') {
        navItems.style.display = "none";
    }
}

/**
 *  Displays the navigation menu items.
 */
function displayNav() {
    const navItems = document.getElementById('menu-items');
    navItems.style.display = "block";
}

