import os
import json
import datetime

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

for fileName in os.listdir():
    if fileName[-5:] == ".html":
        pass

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
 
os.system("git add -- . :!./.vscode/* :!.DS_Store")
os.system("git commit -m 'updated!'")
os.system("git push")