function pageLoaded() {
	items = localStorage["cart"].slice(4).split(",").slice(0, -1)
	try {
		document.querySelector(".cartItemsNumber").innerHTML = "(" + (items.length) + ")";
		document.querySelector(".emptyDiv").remove();
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerHTML = null;
	}
	for (const item in items) {
		console.log(item);
	}
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}