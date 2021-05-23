function pageLoaded() {
	if (localStorage["cart"] !== "{}" && localStorage["cart"] !== undefined) {
		document.querySelector(".cartNumber").style.display = "inline-block";
		document.querySelector(".cartNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);
	} else {
		document.querySelector(".cartNumber").style.display = "none";
	}

    var stripe = Stripe("pk_test_51I8YS7FmFajbaU3guxyTwpwjK9375H8qLBZkJ5UzO3sPJ6T2vTs2DnrwL1MN7x34wl5xwSWQ1mTO01TxYMMA9icx003KqkJtcC");

    fetch("https://johanssudd-checkout.herokuapp.com/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: localStorage["cart"]
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var elements = stripe.elements();

            var card = elements.create("card", {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
            }
        });

        card.mount(".paymentDiv");
    })
    .then(function(result) {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}