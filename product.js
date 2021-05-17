let divs, size, timer, count = 1, divCount = count, time = 0, timeCount = 0;
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
	const startTime = window.performance.now();
	let smallImgs = Array.prototype.slice.call(document.querySelectorAll(".smallProductImg"));
	if (smallImgs.length !== 0) {
		for (i2 in smallImgs) {
			if (decodeURI(smallImgs[i2].src.split("%20")).split(",").some((element) => sender.innerText.includes(element)))
				//smallImgs[i2].src = smallImgs[i2].src.replace(encodeURI(decodeURI(smallImgs[i2].src.split("%20")).split(",").filter((element) => sender.innerText.includes(element)).slice(-1)), encodeURI(sender.value));
				smallImgs[i2].src = smallImgs[i2].src.replace(encodeURI(decodeURI(smallImgs[i2].src).split("%20").filter((element) => sender.innerText.includes(element))[decodeURI(smallImgs[i2].src).split("%20").filter((element) => sender.innerText.includes(element)).length - 1]), encodeURI(sender.value));
			}
		smallImgHovered(document.querySelector(".selected"));
	} else {
		const productImg = document.querySelector(".productImg");
		productImg.src = productImg.src.replace(productImg.src.split("/").slice(productImg.src.split("/").length - 1), encodeURI(sender.parentElement.parentElement.parentElement.firstElementChild.innerText + " " + sender.value)+ ".webp");
	}
	time += window.performance.now() - startTime;
	timeCount += 1;
	console.log("AVERAGE: " + time/timeCount)
}

function buy() {
	let variant = "";
	for (variantSelect of document.querySelectorAll(".variantSelect")) {
		variant += variantSelect.parentElement.firstElementChild.innerText + ": " + variantSelect.value + ", ";
	}
	const product = document.URL.split("/")[3] + ">" + document.querySelector(".productHeader").innerText + ">" + variant.slice(0, -2) + ">" + document.querySelector(".smallProductImg").src.split("/")[5] + ">" + document.querySelector(".productPriceText").innerText;
	try {
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