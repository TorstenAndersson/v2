fetch('https://api.github.com/repos/TorstenAndersson/productServer').then(response=>response.json()).then(data=> {
	if (new Date(data.updated_at).getTime() > localStorage.getItem("lastUpdate")) {
		localStorage.setItem("lastUpdate", new Date(data.updated_at).getTime());
		fetch('https://johanssudd.herokuapp.com/all').then(response=>response.json()).then(data=>localStorage.setItem("productInfo", JSON.stringify(data)))
	}
});

function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	console.log("page loaded");
	try {
		document.querySelector(".cartItemsNumber").innerHTML = localStorage["cart"].slice(4).split(",").length - 1;
	} catch {
		document.querySelector(".cartItemsNumber").innerHTML = null;
		document.querySelector(".cartItemsNumber").style.visibility = "hidden";
	}
	product = JSON.parse(localStorage.getItem("productInfo"));
	document.querySelector(".productImg").setAttribute("src", "../" + product.products[1].items.SuddJohan.img);
	document.querySelector(".productHeader").innerHTML = product.products[1].items.SuddJohan.name;
	document.querySelector(".productDescription").innerHTML = product.products[1].items.SuddJohan.description;
	document.querySelector(".productPriceText").innerHTML = product.products[1].items.SuddJohan.price.original;
	if (product.products[1].items.SuddJohan.price.discount != undefined) {
		document.querySelector(".productPriceText").classList.add("line");
		var myDiscountedPriceText = document.createElement("span");
		myDiscountedPriceText.appendChild(document.createTextNode(product.products[1].items.SuddJohan.price.discount.price))
		myDiscountedPriceText.classList.add("dicountedPrice");
		myDiscountedPriceText.classList.add("productPriceText");
		document.querySelector(".textFrame").insertBefore(myDiscountedPriceText, document.querySelector(".productPriceText"));
	}
}

function buy() {
	localStorage.setItem("cart", localStorage.getItem("cart") + "Sudd Johan,");
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
