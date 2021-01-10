function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	console.log("page loaded!");
	
	fetch('../documents/sudd-johan.txt').then(response=>response.json()).then(data=>create(data));
	
	function create(product) {
		document.querySelector(".productImg").setAttribute("src", "../" + product.product[0].img);
		document.querySelector(".productHeader").innerHTML = product.product[0].name;
		document.querySelector(".productDescription").innerHTML = product.product[0].description;
		document.querySelector(".productPriceText").innerHTML = product.product[0].price.original;
		if (product.product[0].price.discount != undefined) {
			document.querySelector(".productPriceText").classList.add("line");
			var myDiscountedPriceText = document.createElement("span");
			myDiscountedPriceText.appendChild(document.createTextNode(product.product[0].price.discount.price))
			myDiscountedPriceText.classList.add("dicountedPrice");
			myDiscountedPriceText.classList.add("productPriceText");
			document.querySelector(".textFrame").insertBefore(myDiscountedPriceText, document.querySelector(".productPriceText"));
		}
	}
}

function buy() {
	localStorage.setItem("cart", localStorage.getItem("cart") + "Sudd Johan,"); 
	/*
	retrive cart items (leaves one empty at end): localStorage["cart"].slice(4).split(","); 
	retrive cart length: localStorage["cart"].slice(4).split(",").length - 1
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
