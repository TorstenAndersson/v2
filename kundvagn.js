function pageLoaded() {
	items = localStorage["cart"].slice(4).split(",").slice(0, -1)
	try {
		document.querySelector(".cartItemsNumber").innerText = "(" + (items.length) + ")";
		document.querySelector(".emptyDiv").remove();
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerText = null;
	}
	for (item in ["Produkt", "Pris", "Antal", "Totalt"].values) {
		console.log(item)
	}
	/*
	var cartDiv = document.createElement("div");
	var productSpan = document.createElement("span");
	productSpan.innerText = "Produkt";
	cartDiv.appendChild(productSpan);
	var priceSpan = document.createElement("span");
	priceSpan.innerText = "Pris";
	cartDiv.appendChild(priceSpan);
	var quantitySpan = document.createElement("span");
	quantitySpan.innerText = "Antal";
	cartDiv.appendChild(quantitySpan);
	var totalSpan = document.createElement("span");
	totalSpan.innerText = "Totalt";
	cartDiv.appendChild(totalSpan);
	document.querySelector(".pageContent").appendChild(cartDiv);
	*/
	/*
	<div class="">
		<span>Produkt</span>
		<span>Pris</span>
	</div>

	*/
	console.log("Current cart!")
	for (const item in items) {
		console.log(items[item]);
	}
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}