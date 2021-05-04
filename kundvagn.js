function pageLoaded() {
	try {
		const items = JSON.parse(localStorage["cart"]);
		document.querySelector(".cartItemsNumber").innerText = Object.values(items).reduce((a, b) => +a + +b);
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
			productImg.setAttribute("width", "80px");
			productImg.setAttribute("height", "80px");
			productImg.setAttribute("alt", item.split(">")[3].slice(0, -4).replace("%20", " "));
			productLink.appendChild(productImg);
			var textDiv = document.createElement("div");
			textDiv.classList.add("textDiv");
			var productName = document.createElement("span");
			productName.classList.add("productName");
			productName.innerText = item.split(">")[1];
			textDiv.appendChild(productName);
			var productVariant = document.createElement("span");
			productVariant.classList.add("productVariant");
			productVariant.innerText = item.split(">")[2];
			textDiv.appendChild(productVariant);
			productLink.appendChild(textDiv);
			productFrame.appendChild(productLink);
			var priceText = document.createElement("span");
			priceText.classList.add("priceText");
			priceText.innerText = item.split(">")[4];
			productFrame.appendChild(priceText);
			var quantitySelect = document.createElement("select");
			quantitySelect.classList.add("quantitySelect");
			quantitySelect.setAttribute("onchange", "selectChanged(this)");
			selectChanged(quantitySelect);
			/*
			if (items[item] < 25) {
				for (var i = 1; i < 26 + +items[item]; i ++) {
					var option = document.createElement("option");
					option.innerText = i;
					quantitySelect.appendChild(option);
					if (i === +items[item]) {
						option.setAttribute("selected", "");
					}
				}
			} else {
				for (var i = +items[item] - 25; i < +items[item] + 25; i ++) {
					var option = document.createElement("option");
					option.innerText = i;
					quantitySelect.appendChild(option);
					if (i === +items[item]) {
						option.setAttribute("selected", "");
					}
				}
			}
	*/
			productFrame.appendChild(quantitySelect);
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

function selectChanged(sender) {
	if (+sender.value < 25) {
		for (var i = 1; i < 25 + +sender.value; i ++) {
			var option = document.createElement("option");
			option.innerText = i;
			sender.appendChild(option);
			if (i === +sender.value) {
				option.setAttribute("selected", "");
			}
		}
	} else {
		for (var i = +sender.value - 25; i < +sender.value + 25; i ++) {
			var option = document.createElement("option");
			option.innerText = i;
			sender.appendChild(option);
			if (i === +sender.value) {
				option.setAttribute("selected", "");
			}
		}
	}
}

function removeItem(sender) {
	console.log("trying to remove " + sender.parentElement.firstElementChild.children[1].innerText)
}