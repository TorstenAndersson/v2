function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerHTML = "(" + (localStorage["cart"].slice(4).split(",").length - 1) + ")";
		document.querySelector(".emptyDiv").remove();
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerHTML = null;
	}
	for (const item in localStorage["cart"].slice(4).split(",")) {
		console.log(item);
	}
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}