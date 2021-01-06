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