function pageLoaded() {
    if (localStorage["cart"] !== "{}" && localStorage["cart"] !== undefined) document.querySelector(".cartItemsNumber").style.display = "inline-block";
    document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

var isScrolled = false;

function pageScrolled() {
    var navigationBar = document.querySelector(".navigationBar");
    if (window.pageYOffset > 30) {
        if (!isScrolled) {
            navigationBar.style.position = "fixed";
            navigationBar.style.top = "0px";
            navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
            navigationBar.style.zIndex = "2";
            isScrolled = true;
        }
    }
    if (window.pageYOffset < 30) {
        if (isScrolled) {
            navigationBar.style.position = "absolute";
            navigationBar.style.top = "30px";
            navigationBar.style.backgroundColor = "transparent";
            navigationBar.style.zIndex = "2";
            isScrolled = false;
        }
    }
}