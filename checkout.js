function pageLoaded() {
	document.querySelector(".cartNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);

    var stripe = Stripe("pk_live_51I8YS7FmFajbaU3gjKHq59q1DNr1jGYHOAmfYfNNfWqY9gIP8NxqQQDYSRN4xYK3fSDe64KuGF07l7DKEDj9fU4x00GlOzB59T");

    fetch("https://johanssudd-checkout.herokuapp.com/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: localStorage["cart"]
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
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

        card.mount(".cardInput");
    })
    .then((result) => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });

	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function swish() {
    fetch("https://mss.cpc.getswish.net/swish-cpcapi/api/v1/paymentrequests/11A86BE70EA346E4B1C39C874173F088")
}