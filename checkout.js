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

        console.log(data)

        card.mount(".cardInput");
    })
    .then((result) => {
        try {
        if (result.error) {
            alert(result.error.message);
            }
        } catch {
            console.log("error här");
        }
    })
    /*
    .catch((error) => {
        console.error("Error:", error);
    });
    */

	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function swish() {
    fetch("https://johanssudd-checkout.herokuapp.com/swish", {
        method: "POST"
    }).then(data => data.json()).then(response => console.log(response));
}