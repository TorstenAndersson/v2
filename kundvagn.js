function pageLoaded() {
	try {
		const items = JSON.parse(localStorage["cart"]);
		document.querySelector(".cartItemsNumber").innerText = Object.values(items).reduce((a, b) => parseInt(a) + parseInt(b));
		document.querySelector(".cartItemsNumber").style.display = "inline-block";
		document.querySelector(".columnDiv").style.display = "block";

		console.log("Current cart!")
		for (const item of Object.keys(items)) {
			console.log(item);
			var productFrame = document.createElement("div");
			productFrame.classList.add("productFrame");
			var productLink = document.createElement("a");
			productLink.classList.add("productLink");
			productLink.href = "/" + item.split(">")[0] + "/" + item.split(">")[1].toLowerCase();
			var productImg = document.createElement("img");
			productImg.classList.add("productImg");
			productImg.src = ("/imgs/" + item.split(">")[1] + "/" + item.split(">")[3]).replace(" ", "%20");
			productImg.width = "80px";
			productImg.height = "80px";
			productImg.alt = item.split(">")[3].slice(0, -4).replace("%20", " ");
			productLink.appendChild(productImg);
			productFrame.appendChild(productLink);
			document.querySelector(".pageContent").appendChild(productFrame);
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
	console.log("trying to remove " + sender.parentElement.firstElementChild.children[1].innerText)
}