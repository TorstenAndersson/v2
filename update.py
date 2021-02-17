import os
import json
import datetime

# Creating a variable for JSON info

products = json.loads('''
{
    "sudd":[{
        "name":"Sudd Johan",
        "description":"Bara gamla goda Johan.",
        "price":{
            "discount":{
                "price":"10,99 kr",
                "reason":"Fick vibbarna"
            },
            "original":"14,99 kr"
        },
        "img":"imgs/Sudd/Sudd Johan.png",
        "type":"sudd","onDisplay":"true"
    }],
    "merchandise":[{
        "name":"Johans Hoodie",
        "description":"fyfan va varmt",
        "price":{
            "discount":{
                "price":"149,99 kr",
                "reason":"2020 REA"
            },
            "original":"499,99 kr"
        },
        "img":"imgs/Johans Hoodie/Johans Hoodie White Front.png",
        "type":"merchandise","onDisplay":"false"
    },{
        "name":"Johans Crocs",
        "description":"LFIPÅPT FLOP",
        "price":{
            "discount":{
                "price":"1000,99 kr",
                "reason":"PÅSKREA"
            },
            "original":"349,99 kr"
        },
        "img":"imgs/Johans Crocs/Johans Crocs Medium Above.png",
        "type":"merchandise",
        "onDisplay":"true"
    },{
        "name":"Johans Skal",
        "description":"Skydda din mobil!",
        "price":{
            "discount":{
                "price":"",
                "reason":""
            },
            "original":"149,99 kr"
        },
        "img":"imgs/Johans Skal/Johans Skal iPhone 12 Pro Max.png",
        "type":"merchandise",
        "onDisplay":"true"
    }],
    "onDisplay":[{
        "name":"Sudd Johan",
        "description":"Bara gamla goda Johan.",
        "price":{
            "discount":{
                "price":"10,99 kr",
                "reason":"Fick vibbarna"
            },
            "original":"14,99 kr"
        },
        "img":"imgs/Sudd/Sudd Johan.png",
        "type":"sudd","onDisplay":"true"
    },{
        "name":"Johans Crocs",
        "description":"LFIPÅPT FLOP",
        "price":{
            "discount":{
                "price":"1000,99 kr",
                "reason":"PÅSKREA"
            },
            "original":"349,99 kr"
        },
        "img":"imgs/Johans Crocs/Johans Crocs Medium Above.png",
        "type":"merchandise",
        "onDisplay":"true"
    },{
        "name":"Johans Skal",
        "description":"Skydda din mobil!",
        "price":{
            "discount":{
                "price":"",
                "reason":""
            },
            "original":"149,99 kr"
        },
        "img":"imgs/Johans Skal/Johans Skal iPhone 12 Pro Max.png",
        "type":"merchandise",
        "onDisplay":"true"
    }],
    "items":{
        "SuddJohan":{
            "name":"Sudd Johan",
            "description":"Bara gamla goda Johan.",
            "price":{
                "discount":{
                    "price":"10,99 kr",
                    "reason":"Fick vibbarna"
                },
                "original":"14,99 kr"
            },
            "img":"imgs/Sudd/Sudd Johan.png",
            "type":"sudd",
            "onDisplay":"true"
        },
        "JohansHoodie":{
            "name":"Johans Hoodie",
            "description":"fyfan va varmt",
            "price":{
                "discount":{
                    "price":"149,99 kr",
                    "reason":"2020 REA"
                },
                "original":"499,99 kr"
            },
            "img":"imgs/Johans Hoodie/Johans Hoodie White Front.png",
            "type":"merchandise",
            "onDisplay":"false"
        },
        "JohansCrocs":{
            "name":"Johans Crocs",
            "description":"LFIPÅPT FLOP",
            "price":{
                "discount":{
                    "price":"1000,99 kr",
                    "reason":"PÅSKREA"
                },
                "original":"349,99 kr"
            },
            "img":"imgs/Johans Crocs/Johans Crocs Medium Above.png",
            "type":"merchandise",
            "onDisplay":"true"
        },
        "JohansSkal":{
            "name":"Johans Skal",
            "description":"Skydda din mobil!",
            "price":{
                "discount":{
                    "price":"",
                    "reason":""
                },
                "original":"149,99 kr"
            },
            "img":"imgs/Johans Skal/Johans Skal iPhone 12 Pro Max.png",
            "type":"merchandise",
            "onDisplay":"true"
        }
    }
}
''')

# Creating basic files

onDisplay = ""
i = 0
for product in products["onDisplay"]:
    #print(product)
    onDisplay += '''
<div class="productDiv" style="order: ''' + str(i) + '''";>
    <a href="/''' + product["type"] + "/" + product["name"].lower().replace(" ", "%20") + '''">
    </a>
</div>'''
    print(onDisplay)
    #products["onDisplay"][product]
    i += 1

index = '''<!DOCTYPE html>
<html lang="sv">
	<head>
		<title>Johanssudd</title>
		<meta name="keywords" content="johan, sudd, johanssudd, johansudd">
		<meta name="description" content="Johanssud. Sudda bort dina pengar. På vår hemsida kan du köpa högkvalitativa sudd och merchandise.">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="imgs/website/johanFavicon.png">
		<link rel="stylesheet" href="index.css">
		<script src="index.js"></script>
	</head>

	<body onload="pageLoaded()" onscroll="pageScrolled()">
		<div class="background">
			<nav class="navigationBar">
				<a class="topLogoTextDiv" href="/">
					<span class="topLogoText">Johanssudd</span>
				</a>
				<div class="topTextDiv">
					<a href="/">
						<span class="topText current">HEM</span>
					</a>
					<a href="om oss">
						<span class="topText">OM OSS</span>
					</a>
					<a href="sudd">
						<span class="topText">SUDD</span>
					</a>
					<a href="merchandise">
						<span class="topText">MERCHANDISE</span>
					</a>
					<a href="jobb">
						<span class="topText jobbText">JOBB</span>
					</a>
					<div class="verticalLine"></div>
					<a href="kundvagn">
						<span class="topText cartText">KUNDVAGN</span>
					</a>
				</div>
			</div>
			<div class="cover"></div>
		</nav>
		<div class="pageContent">
			<div class="logoAndMotto">
				<span class="logoText">Johanssudd</span>
				<span class="motto">Sudda bort dina pengar</span>
			</div>
			<div class="slideshowDiv">
				<img class="orderButton" src="imgs/website/backward.png" onclick="slide('backward')" style="left: 0px;" alt="Next Slide">
				<img class="orderButton" src="imgs/website/forward.png" onclick="slide('forward')" style="right: 0px;" alt="Previous Slide">
				<div class="slideshow" style="left: 0px">''' + '''
                </div>
			</div>
			<div class="smallParagraph parOne">
				<span class="paragraphHeader small">Sveriges Främsta</span>
				<span>Vi anses av många som kärnan i ett fungerande samhälle. </span>
			</div>
			<div class="smallParagraph parTwo">
				<span class="paragraphHeader small">Våra Priser</span>
				<span>Ofta inom suddindustrin ställs frågan: "Hur mycket kan det kosta?"
				<br>
				<br>
				För mycket.</span>
			</div>
			<div class="paragraph">
				<span class="paragraphHeader big">Vill du arbeta med oss?</span>
				<span>Vi här på Johanssudd söker alltid arbetskraft. Vi erbjuder massvis med olika jobb inom alla områden du kan tänka dig. Om du tror att du har vad som krävs önskar vi att du skulle fylla i vårt formulär <a class="hereLink" href="jobb">här</a>!</span>
			</div>
		</div>
		<span class="footerLogoText">''' + str(datetime.datetime.now().year) + '''</span>
	</body>
</html>'''

# Creating product files

for product in products["items"]:
    path = "./" + products["items"][product]["type"] + "/" + products["items"][product]["name"].lower() + ".html"
    if not os.path.exists(path):
        open(path, "x")
    open(path, "w").write('''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>''' + products["items"][product]["name"] + ''' - Johanssudd</title>
        <meta name="keywords" content="''' + products["items"][product]["name"].lower() + ''', johan sudd, johanssudd, johansudd">
        <meta name="description" content="Köp ''' + products["items"][product]["name"] + ". " + products["items"][product]["description"] +'''">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/johanFavicon.png" type="icon/gif">
        <link rel="stylesheet" href="/product.css">
        <script src="/product.js"></script>
    </head>

    <body onload="pageLoaded()">
        <nav class="navigationBar">
            <a class="topLogoTextDiv" href="/">
                <span class="topLogoText">Johanssudd</span>
            </a>
            <div class="topTextDiv">
                <a href="/">
                    <span class="topText">HEM</span>
                </a>
                <a href="/om oss">
                    <span class="topText">OM OSS</span>
                </a>
                <a href="/sudd">
                    <span class="topText">SUDD</span>
                </a>
                <a href="/merchandise">
                    <span class="topText">MERCHANDISE</span>
                </a>
                <a href="/jobb">
                    <span class="topText jobbText">JOBB</span>
                </a>
                <div class="verticalLine"></div>
                <a href="/kundvagn">
                    <span class="topText cartText">KUNDVAGN</span>
                    <span class="cartItemsNumber">0</span>
                </a>
            </div>
        </nav>
        <div class="pageContent">
            <div class="notification">
                <span class="notificationText">Tillagd i kundvagnen!</span>
            </div>
            <div class="productFrame">
                <div class="imgFrame">
                    <img class="productImg" src="/''' + products["items"][product]["img"] + '''" alt="''' + products["items"][product]["name"] + '''">
                </div>
                <div class="textFrame">
                    <span class="productHeader">''' + products["items"][product]["name"] + '''</span>
                    <span class="productDescription">''' + products["items"][product]["description"] + '''</span>
                    <span class="productPriceText discountedPrice">''' + products["items"][product]["price"]["original"] + '''</span>
                    <span class="productPriceText line">''' + products["items"][product]["price"]["discount"]["price"] + '''</span>
                    <div class="cartAddDiv">
                        <button class="cartAdd" onclick="buy(this)">
                            <span class="cartAddText">Lägg i kundvagn</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
    </body>
</html>''')

# Update git with new changes
 
os.system("git add -- . :!./.vscode/* :!.DS_Store")
os.system("git commit -m 'updated!'")
os.system("git push")