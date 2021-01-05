function pageLoaded() {
    document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
    console.log("page loaded!");

    fetch('documents/json.txt').then(response=>response.json()).then(data=>create(data));

    function create(products) {
        console.log(products)

        for (var i = 0; i < Object.keys(products.products).length; i++) {
            var myDiv = document.createElement("div");
            myDiv.classList.add("paddingDiv");
            document.querySelector("div.mainFrame").appendChild(myDiv);
            var myLink = document.createElement("a");
            myLink.classList.add("productFrame");
            myLink.setAttribute("href", products.products[i].link)
            if (products.products[i].price.discount != undefined) {
                var myDiscount = document.createElement("span");
                myDiscount.classList.add("discountReason");
                myDiscount.appendChild(document.createTextNode(products.products[i].price.discount.reason))
                myLink.appendChild(myDiscount);
            }
            var myImage = document.createElement("img");
            myImage.setAttribute("src", products.products[i].img);
            myImage.classList.add("productImg");
            myLink.appendChild(myImage);
            var myHeader = document.createElement("span");
            myHeader.appendChild(document.createTextNode(products.products[i].name));
            myHeader.classList.add("productHeader");
            myLink.appendChild(myHeader);
            var myTextDiv = document.createElement("div");
            var myPriceText = document.createElement("span");
            myPriceText.classList.add("productPriceText");
            myPriceText.appendChild(document.createTextNode(products.products[i].price.original));
            if (products.products[i].price.discount != undefined) {
                myPriceText.classList.add("line");
                var myDiscountedPriceText = document.createElement("span");
                myDiscountedPriceText.appendChild(document.createTextNode(products.products[i].price.discount.price))
                myDiscountedPriceText.classList.add("dicountedPrice");
                myDiscountedPriceText.classList.add("productPriceText");
                myTextDiv.appendChild(myDiscountedPriceText);
            }
            myTextDiv.appendChild(myPriceText)
            myLink.appendChild(myTextDiv);
            myDiv.appendChild(myLink);
        }
    }
}

var isScrolled = false;

function pageScrolled() {
    var topDiv = document.querySelector(".topDiv");
    var topLogoText = document.querySelector(".topLogoText");
    var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
    if (window.pageYOffset > 30) {
        if (isScrolled == false) {
            console.log("now");
            topDiv.style.position = "fixed";
            topDiv.style.top = "0px";
            topDiv.classList.add("backgroundAnimation");
            topDiv.style.backgroundColor = "rgb(39, 39, 39)";
            topDiv.classList.remove("backgroundAnimationBack");
            topDiv.style.zIndex = "2";
            isScrolled = true;
        }
    }
    if (window.pageYOffset < 30) {
        if (isScrolled == true) {
            console.log("back");
            topDiv.style.position = "absolute";
            topDiv.style.top = "30px";
            topDiv.classList.add("backgroundAnimationBack");
            topDiv.style.backgroundColor = "transparent";
            topDiv.classList.remove("backgroundAnimation");
            topDiv.style.zIndex = "2";
            isScrolled = false;
        }
    }
}
