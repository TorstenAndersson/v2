import os
import json
import datetime

# Creating a variable for JSON info

products = json.loads('''
{
    "products":[
        {
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
            "onDisplay":"True"
        },{
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
            "onDisplay":"False"
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
            "onDisplay":"True"
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
            "onDisplay":"True"
        }
    ]
}''')
"""
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
        "type":"sudd","onDisplay":"True"
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
        "type":"merchandise","onDisplay":"False"
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
        "onDisplay":"True"
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
        "onDisplay":"True"
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
        "type":"sudd","onDisplay":"True"
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
        "onDisplay":"True"
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
        "onDisplay":"True"
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
            "onDisplay":"True"
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
            "onDisplay":"False"
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
            "onDisplay":"True"
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
            "onDisplay":"True"
        }
    }
}
''')
"""

sudd = []
merchandise = []
onDisplay = []

for product in products["products"]:
    eval(product["type"]).append(product)
    if eval(product["onDisplay"]):
        onDisplay.append(product)

#print(sudd)
#print(merchandise)
#print(onDisplay)

# Creating basic files

files = {}

# index.html

onDisplayDiv = ""
i = 0
for product in onDisplay:
    if product["price"]["discount"]["reason"] == "":
        visibility = "hidden"
    else:
        visibility = "visible"
    onDisplayDiv += '''
                    <div class="productDiv" style="order: ''' + str(i) + '''";>
                        <a href="/''' + product["type"] + "/" + product["name"].lower().replace(" ", "%20") + '''">
                            <span class="discountReason" style="visibility: ''' + visibility + ''';">''' + product["price"]["discount"]["reason"] + '''</span>
                            <img class="slideshow" src="''' + product["img"] +  '''">
                            <span class="slideshowHeader">''' + product["name"] + '''</span>
                            <span class="slideshowMainText">''' + product["description"] + '''</span>
                            <div class="slideshowPriceText">
                                <span class="price">''' + product["price"]["original"] + '''</span>
                                <span class="price line">''' + product["price"]["discount"]["price"] + '''</span>
                            </div>
                        </a>
                    </div>'''
    #print(onDisplay)
    i += 1

files["index"] = ('''<!DOCTYPE html>
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
				<div class="slideshow" style="left: 0px; width:''' + str(len(onDisplay) * 100) + "%" + '''";>''' + onDisplayDiv + '''
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
</html>''')

# sudd.html

suddDiv = ""
i = 0
for product in sudd:
    if product["price"]["discount"]["reason"] == "":
        visibility = "hidden"
    else:
        visibility = "visibile"
    suddDiv += '''
                <div class="paddingDiv">
                    <a class="productFrame" href="/''' + product["type"] + "/" + product["name"] + '''">
                        <span class="discountReason" style="visibility: ''' + visibility + ''';">''' + product["price"]["discount"]["reason"] + '''</span>
                        <img class="productImg" src="''' + product["img"] + '''">
                        <span class="productHeader">''' + product["name"] + '''</span>
                        <div>
                            <span class="productPriceText">''' + product["price"]["discount"]["price"] + '''</span>
                            <span class="productPriceText discountedPrice line">''' + product["price"]["original"] + '''</span>
                        </div>
                    </a>
                </div>'''
    i += 1
print(suddDiv)

files["sudd"] = '''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>Sudd - Johanssudd</title>
        <meta name="keywords" content="sudd, sud, johanssudd, johansudd">
        <meta name="description" content="Vårt sortiment av sudd här på Johanssudd. Vi erbjuder en stor variation med ett alternativ för alla!">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="imgs/website/johan.png">
        <link rel="stylesheet" href="products.css">
        <script src="sudd.js"></script>
    </head>

    <body onload="pageLoaded()" onscroll="pageScrolled()">
        <div class="background">
            <nav class="navigationBar">
                <a class="topLogoTextDiv" href="/">
                    <span class="topLogoText">Johanssudd</span>
                </a>
                <div class="topTextDiv">
                    <a href="/">
                        <span class="topText">HEM</span>
                    </a>
                    <a href="om oss">
                        <span class="topText">OM OSS</span>
                    </a>
                    <a href="sudd">
                        <span class="topText current">SUDD</span>
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
            <span class="infoHeader">Våra Sudd</span>
            <span class="infoMainText">Alla gör fel ibland.</span>
            <div class="mainFrame">''' + suddDiv + '''
            </div>
        </div>
        <span class="footerLogoText">''' + str(datetime.datetime.now().year) + '''</span>
    </body>
</html>'''

for file in files:
    path = "./" + file + ".html"
    if not os.path.exists(path):
        open(path, "x")
    #print(file)
    open(path, "w").write(files[file])

# Creating product files

for product in products["products"]:
    #print(product)
    path = "./" + product["type"] + "/" + product["name"].lower() + ".html"
    if not os.path.exists(path):
        open(path, "x")
    open(path, "w").write('''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>''' + product["name"] + ''' - Johanssudd</title>
        <meta name="keywords" content="''' + product["name"].lower() + ''', johan sudd, johanssudd, johansudd">
        <meta name="description" content="Köp ''' + product["name"] + ". " + product["description"] +'''">
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
                    <img class="productImg" src="/''' + product["img"] + '''" alt="''' + product["name"] + '''">
                </div>
                <div class="textFrame">
                    <span class="productHeader">''' + product["name"] + '''</span>
                    <span class="productDescription">''' + product["description"] + '''</span>
                    <span class="productPriceText discountedPrice">''' + product["price"]["original"] + '''</span>
                    <span class="productPriceText line">''' + product["price"]["discount"]["price"] + '''</span>
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