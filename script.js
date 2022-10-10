var x = document.getElementById("navlinks")
var container = document.getElementById("container")
var na = document.getElementById("na")
var home = document.getElementById("home")

// close the navbar when the user clicks on any of the nav links

function closeNav() {
    x.className = "close";
    container.className = "container"
    na.style.height = "unset"
    home.style.padding = "48px"
}

// toggles nav bar open/close 

function openNav() {
    x.className = "open"
    container.className = "opaque"
    na.style.height = "0px"
    home.style.padding = "104px 48px 48px 48px"
}

// close navbar when the user scrolls 

closeNav();
window.addEventListener("scroll", closeNav)