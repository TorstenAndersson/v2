function pageLoaded() {
	if (localStorage["cart"] !== "{}" && localStorage["cart"] !== undefined) {
		const items = JSON.parse(localStorage["cart"]);
		document.querySelector(".cartItemsNumber").style.display = "inline-block";
		document.querySelector(".columnDiv").style.display = "block";

		for (const item of Object.keys(items)) {
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
			productFrame.appendChild(quantitySelect);
			var totalText = document.createElement("span");
			productFrame.appendChild(totalText);
			selectChanged(quantitySelect, +items[item]);
			totalText.classList.add("totalText");
			var removeButton = document.createElement("button");
			removeButton.classList.add("removeButton");
			removeButton.setAttribute("onclick", "removeItem(this)");
			removeButton.innerText = "+";
			productFrame.appendChild(removeButton);
			//totalText.innerText = (parseFloat(item.split(">")[4].replace(",", ".")) * +items[item]).toString().replace(".", ",") + " kr";
			document.querySelector(".pageContent").insertBefore(productFrame, document.querySelector(".finishDiv"));
		}
		document.querySelector(".sumNumber").innerText = Array.from(document.querySelectorAll(".totalText")).reduce((x, y) => +x.innerText.slice(0, -3).replace(",", ".") + +y.innerText.slice(0, -3).replace(",", "."));

	} else {
		document.querySelector(".emptyDiv").style.display = "block";
	}

	if (window.innerHeight - document.querySelector(".pageContent").lastElementChild.offsetTop < 140) {
		var footer = document.querySelector(".footerText");
		footer.style.position = "initial";
		footer.style.bottom = "initial";
		footer.style.width = "initial";
	}
	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

var isScrolled = false;

function pageScrolled() {
	var navigationBar = document.querySelector(".navigationBar");
	if (window.pageYOffset > 30) {
		if (!isScrolled) {
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.style.backgroundColor = "rgb(255, 255, 255)";
			navigationBar.style.boxShadow = "rgb(235, 235, 235) 0px 0px 15px 1px";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled) {
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.style.backgroundColor = "transparent";
			navigationBar.style.boxShadow = "none";
			isScrolled = false;
		}
	}
}

function selectChanged(sender) {
	const product = sender.parentElement.firstElementChild.href.split("/")[3] + ">" + sender.parentElement.firstElementChild.children[1].firstElementChild.innerText + ">" + sender.parentElement.firstElementChild.children[1].children[1].innerText + ">" + sender.parentElement.firstElementChild.firstElementChild.src.split("/")[5] + ">" + sender.parentElement.children[1].innerText;
	if (sender.value !== "") localStorage["cart"] = localStorage["cart"].replace(product + '":"' + JSON.parse(localStorage["cart"])[product], product + '":"' + sender.value);
	const items = JSON.parse(localStorage["cart"]);
	document.querySelector(".cartItemsNumber").innerText = Object.values(items).reduce((a, b) => +a + +b);
	const value = +items[product];
	sender.parentElement.children[3].innerText = (Math.round(parseFloat(product.split(">")[4].replace(",", ".")) * value * 100)/100).toString().replace(".", ",") + " kr";
	if (document.querySelector(".totalText") != undefined) document.querySelector(".sumNumber").innerText = Array.from(document.querySelectorAll(".totalText")).reduce((x, y) => +x.innerText.slice(0, -3).replace(",", ".") + +y.innerText.slice(0, -3).replace(",", "."));
	while (sender.firstElementChild) sender.removeChild(sender.firstElementChild);
	if (value < 25) {
		for (var i = 1; i < 25 + value; i ++) {
			var option = document.createElement("option");
			option.innerText = i;
			sender.appendChild(option);
			if (i === value) {
				option.setAttribute("selected", "");
			}
		}
	} else {
		var option = document.createElement("option");
		option.innerText = 1;
		sender.appendChild(option)
		if (value > 75) {
			option = document.createElement("option");
			option.innerText = Math.floor((value - 26)/50) * 50;
			sender.appendChild(option);
		}
		for (var i = value - 25; i < value + 25; i ++) {
			option = document.createElement("option");
			option.innerText = i;
			sender.appendChild(option);
			if (i === value) {
				option.setAttribute("selected", "");
			}
		}
	}
	option = document.createElement("option");
	option.innerText = Math.ceil((value + 25)/50) * 50;
	sender.appendChild(option);
}

function removeItem(sender) {
	document.querySelector(".pageContent").removeChild(sender.parentElement);
	const product = sender.parentElement.firstElementChild.href.split("/")[3] + ">" + sender.parentElement.firstElementChild.children[1].firstElementChild.innerText + ">" + sender.parentElement.firstElementChild.children[1].children[1].innerText + ">" + sender.parentElement.firstElementChild.firstElementChild.src.split("/")[5] + ">" + sender.parentElement.children[1].innerText;
	localStorage["cart"] = localStorage["cart"].replace('"' + product + '":"' + JSON.parse(localStorage["cart"])[product] + '",', "");
	localStorage["cart"] = localStorage["cart"].replace(',"' + product + '":"' + JSON.parse(localStorage["cart"])[product] + '"', "");
	localStorage["cart"] = localStorage["cart"].replace('"' + product + '":"' + JSON.parse(localStorage["cart"])[product] + '"', "");
	if (localStorage["cart"] === "{}") {
		document.querySelector(".columnDiv").style.display = "none";
		document.querySelector(".cartItemsNumber").style.display = "none";
		document.querySelector(".emptyDiv").style.display = "block";
	} else {
		document.querySelector(".cartItemsNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);
	}
	if (window.innerHeight - document.querySelector(".pageContent").lastElementChild.offsetTop < 140) {
		var footer = document.querySelector(".footerText");
		footer.style.position = "initial";
		footer.style.bottom = "initial";
		footer.style.width = "initial";
	}
}