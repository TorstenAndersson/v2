function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerHTML = localStorage["cart"].slice(4).split(",").length - 1;
		document.querySelector(".cartItemsNumber").style.visibility = "visible";
	} catch {
		document.querySelector(".cartItemsNumber").innerHTML = null;
	}
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function buy(sender) {
	localStorage.setItem("cart", localStorage.getItem("cart") + sender.parentElement.parentElement.firstElementChild.innerHTML + ",");
	document.querySelector(".cartItemsNumber").innerHTML = "(" + localStorage.getItem("cart").slice(4).split(",").length - 1 + ")";
	if (localStorage.getItem("cart").slice(4).split(",").length - 1 == 1) {
		document.querySelector(".cartItemsNumber").style.visibility = "visible";
	}
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
