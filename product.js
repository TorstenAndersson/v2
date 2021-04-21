var divs;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;

function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerText = "(" + (localStorage["cart"].slice(4).split(",").length - 1) + ")";
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerText = null;
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
	if (smallImgs.length != 0) {
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

function buy(sender) {
	var variant = "";
	for (const variantSelect of document.querySelectorAll(".variantSelect")) {
		variant += '"' + variantSelect.parentElement.firstElementChild.innerText + '":"' + variantSelect.value + '",';
	}
	variant[-1] = "";
	localStorage.setItem("cart", localStorage.getItem("cart") + '; {"name":"' + sender.parentElement.parentElement.firstElementChild.innerText + '","variant":{' + variant + "}}")	;
	var cartItems = document.querySelector(".cartItemsNumber");
	cartItems.innerText = "(" + (localStorage.getItem("cart").slice(4).split(",").length - 1) + ")";
	cartItems.classList.add("shakeAnimation");
	setTimeout(function() {cartItems.classList.remove("shakeAnimation")}, 500)
	/*
	retrive cart items (leaves one empty at end): localStorage.getItem("cart").slice(4).split(",").slice(0, -1); 
	retrive cart length: localStorage.getItem("cart").slice(4).split(",").length - 1
	*/
	var notification = document.querySelector(".notification");
	notification.style.opacity = "1";
	notification.classList.remove("fadeOut");
	notification.classList.add("fadeIn");
	setTimeout(function() { 
		notification.classList.remove("fadeIn");
		notification.classList.add("fadeOut");
		notification.style.opacity = "0";
	}, 5000);
}