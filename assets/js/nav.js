const MOBILE_WIDTH_BREAKPOINT = 770;
const SHOW = "block";
const HIDE = "none";
const UNDERLINE = "underline";

/* Hides or displays the nav menu items based on the size of the screen. */
window.addEventListener('resize', function() {
    const navItems = document.getElementById('menu-items');
    if (window.innerWidth > MOBILE_WIDTH_BREAKPOINT) {
        navItems.style.display = SHOW;
   } else {
       navItems.style.display = HIDE;
   }
});

/**
 *  Toggles the display of the navigation menu items. 
 */
function toggleNav() {
    const navItems = document.getElementById('menu-items');
    const menuButton = document.getElementById('mobile-menu-button');
    const currentlyShowing = navItems.style.display === SHOW;
    if (currentlyShowing) {
        navItems.style.display = HIDE;
        menuButton.style.borderBottom = HIDE;
    } else {
        navItems.style.display = SHOW;
        menuButton.style.textDecoration = UNDERLINE;
    }
}

