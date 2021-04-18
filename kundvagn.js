function pageLoaded() {
	items = localStorage["cart"].slice(4).split(",").slice(0, -1)
	try {
		document.querySelector(".cartItemsNumber").innerText = "(" + (items.length) + ")";
		document.querySelector(".emptyDiv").remove();

		var cartDiv = document.createElement("div");
		for (const item of ["Produkt", "Pris", "Antal", "Totalt"].values()) {
			console.log(item)
			var span = document.createElement("span");
			span.innerText = item;
			span.classList.add("columnText", item.toLowerCase() + "Column");
			cartDiv.appendChild(span);
		}
		document.querySelector(".pageContent").appendChild(cartDiv);

		console.log("Current cart!")
		for (const item of items.values()) {
			console.log(item);
		}
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerText = null;
		document.querySelector(".emptyDiv").style.display = "block";
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
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}