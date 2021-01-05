function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	console.log("page loaded!");
}

var isScrolled = false;

function pageScrolled() {
	var topDiv = document.querySelector(".topDiv");
	var topLogoText = document.querySelector(".topLogoText");
	var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
	if (window.pageYOffset > 30) {
		if (isScrolled == false) {
			console.log("now");
			topDiv.style.position = "fixed";
			topDiv.style.top = "0px";
			topDiv.classList.add("backgroundAnimation");
			topDiv.style.backgroundColor = "rgb(39, 39, 39)";
			topDiv.classList.remove("backgroundAnimationBack");
			topDiv.style.zIndex = "2";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled == true) {
			console.log("back");
			topDiv.style.position = "absolute";
			topDiv.style.top = "30px";
			topDiv.classList.add("backgroundAnimationBack");
			topDiv.style.backgroundColor = "transparent";
			topDiv.classList.remove("backgroundAnimation");
			topDiv.style.zIndex = "2";
			isScrolled = false;
		}
	}
}