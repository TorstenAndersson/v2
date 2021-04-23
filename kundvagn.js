function pageLoaded() {
	try {
		items = localStorage.getItem("cart").split(";").slice(1);
		document.querySelector(".cartItemsNumber").innerText = items.length;
		document.querySelector(".columnDiv").style.display = "block";
		document.querySelector(".emptyDiv").remove();

		console.log("Current cart!")
		for (const item of items.values()) {
			console.log(item);
		}
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerText = null;
		document.querySelector(".emptyDiv").style.display = "block";
		document.querySelector(".columnDiv").remove();
	}
	/*
	var cartDiv = document.createElement("div");
	cartDiv.classList.add("columnDiv");
	for (const item of ["Produkt", "Pris", "Antal", "Totalt"].values()) {
		console.log(item);
		var span = document.createElement("span");
		span.innerText = item;
		span.classList.add("columnText", item.toLowerCase() + "Column");
		cartDiv.appendChild(span);
	}
	document.querySelector(".pageContent").appendChild(cartDiv);

	*/
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}