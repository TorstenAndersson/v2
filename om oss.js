function pageLoaded() {
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

var isScrolled = false;

function pageScrolled() {
	var navigationBar = document.querySelector(".navigationBar");
	if (window.pageYOffset > 30) {
		if (!isScrolled) {
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.classList.add("backgroundAnimation");
			navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
			navigationBar.classList.remove("backgroundAnimationBack");
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled) {
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.classList.add("backgroundAnimationBack");
			navigationBar.style.backgroundColor = "transparent";
			navigationBar.classList.remove("backgroundAnimation");
			isScrolled = false;
		}
	}
}