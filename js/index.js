
var navBar = document.querySelector(".navlost");

window.onscroll = function() {
    // Get the height of the viewport
    var viewportHeight = window.innerHeight;

    // Check if the scroll position is greater than or equal to the viewport height
    if (this.scrollY >= viewportHeight) {
        navBar.classList.add("fixed-top"); // Make the navbar fixed
    } else {
        navBar.classList.remove("fixed-top"); // Return to static positioning
    }
};