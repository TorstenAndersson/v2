function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	console.log("page loaded!");
}

var isScrolled = false;

function pageScrolled() {
	var navigationBar = document.querySelector(".navigationBar");
	var topLogoText = document.querySelector(".topLogoText");
	var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
	if (window.pageYOffset > 30) {
		if (isScrolled == false) {
			console.log("now");
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.classList.add("backgroundAnimation");
			navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
			navigationBar.classList.remove("backgroundAnimationBack");
			navigationBar.style.zIndex = "2";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled == true) {
			console.log("back");
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.classList.add("backgroundAnimationBack");
			navigationBar.style.backgroundColor = "transparent";
			navigationBar.classList.remove("backgroundAnimation");
			navigationBar.style.zIndex = "2";
			isScrolled = false;
		}
	}
}