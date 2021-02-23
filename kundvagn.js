function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerHTML = "(" + (localStorage["cart"].slice(4).split(",").length - 1) + ")";
		document.querySelector(".cartItemsNumber").style.visibility = "visible";
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerHTML = null;
	}
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}