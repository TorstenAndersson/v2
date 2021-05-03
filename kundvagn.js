function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => parseInt(a) + parseInt(b));
		document.querySelector(".cartItemsNumber").style.display = "inline-block";
		document.querySelector(".columnDiv").style.display = "block";

		console.log("Current cart!")
		for (const item of Object.keys(JSON.parse(localStorage["cart"]))) {
			console.log(item);
		}

	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").style.display = "none";
		document.querySelector(".emptyDiv").style.display = "block";
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
function removeItem(sender) {
	console.log("trying to remove" + sender.parentElement.firstChild.src)
}