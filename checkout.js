var stripe = Stripe("pk_test_51I8YS7FmFajbaU3guxyTwpwjK9375H8qLBZkJ5UzO3sPJ6T2vTs2DnrwL1MN7x34wl5xwSWQ1mTO01TxYMMA9icx003KqkJtcC");
var secret;
var card;

function pageLoaded() {
	document.querySelector(".cartNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);

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
        secret = data.clientSecret;

        var elements = stripe.elements();

        card = elements.create("card", {
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
    });
    /*
    .catch((error) => {
        console.error("Error:", error);
    });
    */

	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

function pay(method) {
    document.querySelector("form").submit();

    if (method === "card") {
        stripe.confirmCardPayment(secret, {
            payment_method: {
                card: card
            }
        })
        .then((result) => {
            console.log(result)
        })
    } else {
        fetch("https://johanssudd-checkout.herokuapp.com/swish", {
            method: "POST",
            mode: "no-cors"
        }).then(data => data.json()).then(response => console.log(response));
    }
}