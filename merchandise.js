fetch('https://johanssudd.herokuapp.com/products?wanted=merchandise').then(response=>response.json()).then(products=> {
    for (var i = 0; i < Object.keys(products.items).length; i++) {
       var myDiv = document.createElement("div");
        myDiv.classList.add("paddingDiv");
        var myLink = document.createElement("a");
        myLink.classList.add("productFrame");
        myLink.setAttribute("href", products.items[i].link)
        if (products.items[i].price.discount != undefined) {
            var myDiscount = document.createElement("span");
            myDiscount.classList.add("discountReason");
            myDiscount.appendChild(document.createTextNode(products.items[i].price.discount.reason))
            myLink.appendChild(myDiscount);
        }
        var myImage = document.createElement("img");
        myImage.setAttribute("src", products.items[i].img);
        myImage.classList.add("productImg");
        myLink.appendChild(myImage);
        var myHeader = document.createElement("span");
        myHeader.appendChild(document.createTextNode(products.items[i].name));
        myHeader.classList.add("productHeader");
        myLink.appendChild(myHeader);
        var myTextDiv = document.createElement("div");
        var myPriceText = document.createElement("span");
        myPriceText.classList.add("productPriceText");
        myPriceText.appendChild(document.createTextNode(products.items[i].price.original));
        if (products.items[i].price.discount != undefined) {
            myPriceText.classList.add("line");
            var myDiscountedPriceText = document.createElement("span");
            myDiscountedPriceText.appendChild(document.createTextNode(products.items[i].price.discount.price))
            myDiscountedPriceText.classList.add("discountedPrice");
            myDiscountedPriceText.classList.add("productPriceText");
            myTextDiv.appendChild(myDiscountedPriceText);
        }
        myTextDiv.appendChild(myPriceText)
        myLink.appendChild(myTextDiv);
        myDiv.appendChild(myLink);
        document.querySelector("div.mainFrame").appendChild(myDiv);
    }
});

function pageLoaded() {
    document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

var isScrolled = false;

function pageScrolled() {
    var navigationBar = document.querySelector(".navigationBar");
    var topLogoText = document.querySelector(".topLogoText");
    var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
    if (window.pageYOffset > 30) {
        if (isScrolled == false) {
            navigationBar.style.position = "fixed";
            navigationBar.style.top = "0px";
            navigationBar.classList.add("backgroundAnimation");
            navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
            navigationBar.classList.remove("backgroundAnimationBack");
            navigationBar.style.zIndex = "2";
            isScrolled = true;
        }
    }
    if (window.pageYOffset < 30) {
        if (isScrolled == true) {
            navigationBar.style.position = "absolute";
            navigationBar.style.top = "30px";
            navigationBar.classList.add("backgroundAnimationBack");
            navigationBar.style.backgroundColor = "transparent";
            navigationBar.classList.remove("backgroundAnimation");
            navigationBar.style.zIndex = "2";
            isScrolled = false;
        }
    }
}
