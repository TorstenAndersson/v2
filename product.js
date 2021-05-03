var divs;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;
var timer;

function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => parseInt(a) + parseInt(b));
		document.querySelector(".cartItemsNumber").style.display = "inline-block";
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").style.display = "none";
		localStorage["cart"] = "{ ";
	}
	document.querySelector(".footerLogoText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function smallImgHovered(sender) {
	for (const i2 in Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"))) {
		Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"))[i2].classList.remove("selected");
	}
	sender.classList.add("selected");

	document.querySelector(".productImg").src = sender.src.slice(51);
}

function variantChanged(sender) {
	let smallImgs = Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"));
	if (smallImgs.length !== 0) {
		for (const i2 in smallImgs) {
			if (smallImgs[i2].src.split("%20").length > 4 && sender.innerText.includes(decodeURI(smallImgs[i2].src.split("%20").slice(3, -1))))
				smallImgs[i2].src = smallImgs[i2].src.replace(smallImgs[i2].src.split("%20").slice(3, -1), sender.value); //.join("%20") if color is multiple words
		}
		smallImgHovered(document.querySelector(".selected"));
	} else {
		const productImg = document.querySelector(".productImg");
		productImg.src = productImg.src.replace(productImg.src.split("/").slice(productImg.src.split("/").length - 1), "Johans%20Skal%20" + sender.value.replace(" ", "%20") + ".webp");
	}
}

function buy() {
	var variant = "";
	for (const variantSelect of document.querySelectorAll(".variantSelect")) {
		variant += variantSelect.parentElement.firstElementChild.innerText + ": " + variantSelect.value + ", ";
	}
	const product = document.URL.split("/")[3] + ">" + document.querySelector(".productHeader").innerText + ">" + variant.slice(0, -2) + ">";
	try {
		//JSON.parse(localStorage.getItem("cart"))[sender.parentElement.parentElement.firstElementChild.innerText + ">" + variant.slice(0, -2)] + 1
		localStorage["cart"] = localStorage["cart"].replace(product + '":"' + JSON.parse(localStorage["cart"])[product], product + '":"' + JSON.stringify(parseInt(JSON.parse(localStorage["cart"])[product].slice(0)) + 1));
	} catch {
		localStorage["cart"] = localStorage["cart"].slice(0, -1);
		if (localStorage["cart"] !== "{") {
			localStorage["cart"] += ",";
		}
		localStorage["cart"] += '"' + product + '":"1"}';
	}
	var cartItems = document.querySelector(".cartItemsNumber");
	cartItems.innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => parseInt(a) + parseInt(b));
	cartItems.style.display = "inline-block";

	var notification = document.querySelector(".notification");
	notification.style.opacity = "1";
	
	/*
	if (!active) {
		setTimeout(() => {
			notification.classList.remove("fadeIn");
			notification.classList.add("fadeOut");
			notification.style.opacity = "0";
			active = false;
		}, 5000);
	}
	*/
	if (timer) clearTimeout(timer);
	
	timer = setTimeout(() => {
		notification.style.opacity = "0";
	}, 5000);
}