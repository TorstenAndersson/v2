function pageLoaded() {
	items = localStorage["cart"].slice(4).split(",").slice(0, -1)
	try {
		document.querySelector(".cartItemsNumber").innerText = "(" + (items.length) + ")";
		document.querySelector(".emptyDiv").remove();
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerText = null;
	}
	var cartDiv = document.createElement("div");
	var productSpan = document.createElement("span");
	productSpan.innerText = "Produkt";
	var priceSpan = document.createElement("span");
	priceSpan.innerText = "Pris";
	var quantitySpan = document.createElement("span");
	quantitySpan.innerText = "Antal";
	var totalSpan = document.createElement("span");
	totalSpan.innerText = "Totalt";
	/*
	<div class="">
		<span>Produkt</span>
		<span>Pris</span>
	</div>

	*/
	for (const item in items) {
		console.log(items[item]);
		
	}
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}