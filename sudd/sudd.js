function pageLoaded() {
	console.log("page loaded");
	try {
		document.querySelector(".cartItemsNumber").innerHTML = localStorage["cart"].slice(4).split(",").length - 1;
	} catch {
		document.querySelector(".cartItemsNumber").innerHTML = null;
		document.querySelector(".cartItemsNumber").style.visibility = "hidden";
	}
}

function buy(sender) {
	console.log(sender.parentElement.parentElement.firstElementChild.innerHTML)
	localStorage.setItem("cart", localStorage.getItem("cart") + sender.parentElement.parentElement.firstElementChild.innerHTML + ",");
	document.querySelector(".cartItemsNumber").innerHTML = localStorage.getItem("cart").slice(4).split(",").length - 1;
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
