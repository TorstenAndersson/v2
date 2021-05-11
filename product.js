let divs, size, timer, count = 1, divCount = count;
const initalCount = count; 
if (localStorage["cart"] === undefined) localStorage["cart"] = "{}";

function pageLoaded() {
	if (localStorage["cart"] !== "{}" && localStorage["cart"] !== undefined) {
		document.querySelector(".cartNumber").style.display = "inline-block";
		document.querySelector(".cartNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);
	} else {
		document.querySelector(".cartNumber").style.display = "none";
	}
	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function smallImgHovered(sender) {
	for (i2 in Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"))) {
		Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"))[i2].classList.remove("selected");
	}
	sender.classList.add("selected");

	document.querySelector(".productImg").src = sender.src.slice(51);
}

function variantChanged(sender) {
	let smallImgs = Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"));
	if (smallImgs.length !== 0) {
		for (i2 in smallImgs) {
			if (smallImgs[i2].src.split("%20").length > 4 && sender.innerText.includes(decodeURI(smallImgs[i2].src.split("%20").slice(3, -1))))
				smallImgs[i2].src = smallImgs[i2].src.replace(smallImgs[i2].src.split("%20").slice(3, -1), sender.value); //.join("%20") if color is multiple words
		}
		smallImgHovered(document.querySelector(".selected"));
	} else {
		const productImg = document.querySelector(".productImg");
		productImg.src = productImg.src.replace(productImg.src.split("/").slice(productImg.src.split("/").length - 1), "Johans%20Skal%20" + encodeURI(sender.value)+ ".webp");
	}
}

function buy() {
	let variant = "";
	for (variantSelect of document.querySelectorAll(".variantSelect")) {
		variant += variantSelect.parentElement.firstElementChild.innerText + ": " + variantSelect.value + ", ";
	}
	const product = document.URL.split("/")[3] + ">" + document.querySelector(".productHeader").innerText + ">" + variant.slice(0, -2) + ">" + document.querySelector(".productImg").src.split("/")[5] + ">" + document.querySelector(".productPriceText").innerText;
	try {
		//JSON.parse(localStorage.getItem("cart"))[sender.parentElement.parentElement.firstElementChild.innerText + ">" + variant.slice(0, -2)] + 1
		localStorage["cart"] = localStorage["cart"].replace(product + '":"' + JSON.parse(localStorage["cart"])[product], product + '":"' + JSON.stringify(+JSON.parse(localStorage["cart"])[product].slice(0) + 1));
	} catch {
		localStorage["cart"] = localStorage["cart"].slice(0, -1)
		if (localStorage["cart"] !== "{") {
			localStorage["cart"] += ",";
		}
		localStorage["cart"] += '"' + product + '":"1"}';
	}
	let cartItems = document.querySelector(".cartNumber");
	cartItems.innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);
	cartItems.style.display = "inline-block";

	let notification = document.querySelector(".notification");
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