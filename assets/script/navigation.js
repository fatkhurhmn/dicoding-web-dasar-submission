function sideNavHandler() {
    let navRight = document.getElementById("nav-right");
    let navLeft = document.getElementById("nav-left");
    let navMenu = document.getElementById("nav-menu");
    let nav = document.getElementById("nav");
    if (navRight.className === "nav-right") {
        navRight.className += " open";
        navLeft.className += " open";
        nav.className += " open";
        navMenu.innerText = "-";
    } else {
        navRight.className = "nav-right";
        navLeft.className = "nav-left";
        nav.className = "nav";
        navMenu.innerText = "+";
    }
}