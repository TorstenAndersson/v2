import os
import json
import datetime
import requests
from bs4 import BeautifulSoup

#session = requests.session

# Creating a variable for JSON info

phoneVariants = ""

"""
for phone in sorted(os.listdir("imgs/Johans Skal/")):
    phoneVariants += '''
                    "''' + phone[12:-5] + '",'
"""
#document.querySelector("img[src*='iphone-12-pro--.jpg']")

#document.querySelector(".specs-brief-accent").textContent

phoneReleases = {}

for phone in os.listdir("imgs/Johans Skal/"):
    company = ""
    phone = phone[12:-5]
    print(phone)

    if phone[:6] == "iPhone":
        print("It's an iPhone!")
        company = "apple-phones-48.php"
    if phone[:7] == "Samsung":
        print("Yuck! Samsung")
        company = "samsung-phones-9.php"
        phone = phone.replace(" Plus", "+")

    print("https://gsmarena.com/" + company)
    print("getting a[href*='" + phone.replace(" ", "_").lower() + "-']")

    #releaseDate = BeautifulSoup(requests.get(min(BeautifulSoup(requests.get("https://gsmarena.com/" + company).text, features="html.parser").find_all("img[src*='" + phone.replace(" ", "-") + "]"), key=len).previousSibling.href)).find(".specs-brief-accent").strip()

    companyPath = "phoneInfo/" + company + ".txt"

    print(companyPath)

    if os.path.exists(companyPath):
        response = BeautifulSoup(open(companyPath, "r").read(), features="html.parser")
    else: 
        response = BeautifulSoup(requests.get("https://gsmarena.com/" + company).text, features="html.parser")
        open(companyPath, "x")
        open(companyPath, "w").write(str(response))

    #response = BeautifulSoup(open("log.html", "r").read(), features="html.parser")

    """
    if not os.path.exists("log.html"):
        open("log.html", "x")
    open("log.html", "w").write(response.prettify())
    """
    finding = None
    while finding is None:
        finding = response.select_one("a[href*='" + phone.replace(" ", "_").lower() + "-']")
        if finding is None:
            company2Path = "phoneInfo/" + response.find("a", {"class": "pages-next"}).get("href") + ".txt"
            if os.path.exists(company2Path):
                response = BeautifulSoup(open(company2Path, "r").read(), features="html.parser")
            else: 
                response = BeautifulSoup(requests.get("https://gsmarena.com/" + company2Path[10:-4]).text, features="html.parser")
                open(company2Path, "x")
                open(company2Path, "w").write(str(response))
    """
    try:
        finding = response.select_one("a[href*='" + phone.replace(" ", "_").lower() + "']").get("href")
    except AttributeError:
        company2Path = response.find("a", {"class": "pages-next"}).href
        if os.path.exists(companyPath):
            response = BeautifulSoup(open(companyPath, "r").read(), features="html.parser")
        else: 
            response = BeautifulSoup(requests.get("https://gsmarena.com/" + company).text, features="html.parser")
            open(companyPath, "x")
            open(companyPath, "w").write(str(response))

    """

    print("found " + finding.get("href"))

    phonePath = "phoneInfo/" + phone + ".txt"
    if os.path.exists(phonePath):
        response = BeautifulSoup(open(phonePath, "r").read(), features="html.parser")
    else:
        response = BeautifulSoup(requests.get("https://gsmarena.com/" + finding.get("href")).text, features="html.parser")
        open(phonePath, "x")
        open(phonePath, "w").write(str(response))

    #response = BeautifulSoup(open("log2.html", "r").read(), features="html.parser")

    """
    if not os.path.exists("log2.html"):
        open("log2.html", "x")
    open("log2.html", "w").write(response.prettify())
    """

    #print(str(response.select_one(".specs-brief-accent")))
    time = str(response.find("span", {"data-spec": "released-hl"}).text)

    monthNumbers = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    }

    print("this released " + time[9:13] + monthNumbers[time[15:-3]] + time[-2:] + str(len(phone)))

    phoneReleases[phone] = time[9:13] + monthNumbers[time[15:-3]] + time[-2:] + str(len(phone))

    open("phoneInfo/releaseDates.txt", "w").write(str(dict(sorted(phoneReleases.items(), key=lambda item: item[1]))))
    #print(time[23:27] + monthNumbers[time[29:-16]] + time[-15:])

    #print(BeautifulSoup(.find("img[src*='iphone-12-pro--.jpg']").parent.href)).find(".specs-brief-accent").textContent)
    phoneVariants += '''
                    "''' + phone[12:-5] + '",'

#print(phoneVariants[1:-1])

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
            "img":"/imgs/Sudd/Sudd%20Johan.webp",
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
            "img":"/imgs/Johans%20Hoodie/Johans%20Hoodie%20White%20Front.webp",
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
            "img":"/imgs/Johans%20Crocs/Johans%20Crocs%20Above.webp",
            "perspectives":[
                "Above",
                "AboveBelow",
                "Close"
            ],
            "variants":{
                "Storlek":[
                    "S",
                    "M",
                    "L"
                ]
            },
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
            "img":"/imgs/Johans Skal/Johans%20Skal%20iPhone%2012%20Pro%20Max.webp",
            "variants":{
                "Modell": [''' + phoneVariants[1:-1] + '''
                ]
            },
            "type":"merchandise",
            "onDisplay":"True"
        }
    ]
}''')

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
                            <img src="''' + product["img"] +  '''" width="430px" height="430px" alt="''' + product["name"] + '''">
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
		<link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp">
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
		<main class="pageContent">
			<div class="logoAndMotto">
				<span class="logoText">Johanssudd</span>
				<span class="motto">Sudda bort dina pengar</span>
			</div>
			<div class="slideshowDiv">
				<img class="orderButton" src="/imgs/website/Backward.webp" onclick="slide('backward')" style="left: 0px;" width="10%" alt="Next Slide">
				<img class="orderButton" src="/imgs/website/Forward.webp" onclick="slide('forward')" style="right: 0px;" width="10%" alt="Previous Slide">
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
		</main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
	</body>
</html>''')

# om oss.html

files["om oss"] = '''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>Om Oss - Johanssudd</title>
        <meta name="keywordsd" content="om oss, om oss, johanssudd, johansudd">
        <meta name="description" content="Information om oss här på Johanssudd. Du kan även hitta information om du skulle vilja kontakta oss.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp">
        <link rel="stylesheet" href="om oss.css">
        <script src="om oss.js"></script>
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
                        <span class="topText current">OM OSS</span>
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
        <main class="pageContent">
            <div class="paragraph parOne">
                <span class="paragraphHeader big">Om Oss</span>
                <span>Det som gör oss annorlunda är vår extrema passion för sudd, jag är gift med ett.</span>
            </div>
            <div class="paragraph parTwo">
                <span class="paragraphHeader big">Vilka är vi?</span>
                <span>Vi är Johanssudd, ett företag grundat på ren kärlek för sudd. Vårt mål är att sprida denna passion med flera människor. Vi började med att bara sälja sudd men efter den framgången bestämde vi oss för att expandera vårt sortiment och vi säljer idag allt från sudd till fiskehattar, allt i den högsta kvaliteten man kan hitta.</span>
            </div>
            <div class="paragraph parThree">
                <span class="paragraphHeader big">Kontakta oss</span>
                <span class="beforeMediaSection">Vill du komma i kontakt med oss kan du antingen göra det genom sociala medier eller mejla oss.</span>
                <div class="mediaSection">
                    <a class="media" href="mailto:torsten.andersson.peppa.pig@gmail.com">
                        <img class="socialMediaIcon" src="/imgs/website/Mail Icon.webp" width="25px" height="25px" alt="Mail">
                        <span class="socialMediaText">torsten.andersson.peppa.pig@gmail.com</span>
                    </a>
                    <a class="media" href="https://instagram.com/johanssudd">
                        <img class="socialMediaIcon" src="/imgs/website/Instagram Icon.webp" width="25px" height="25px" alt="Instagram">
                        <span class="socialMediaText">@johanssudd</span>
                    </a>
                    <a class="media" href="https://twitter.com/johanssudd">
                        <img class="socialMediaIcon" src="/imgs/website/Twitter Icon.webp" width="25px" height="25px" alt="Twitter">
                        <span class="socialMediaText">@johanssudd</span>
                    </a>
                </div>
            </div>
        </main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
    </body>
</html>'''

# sudd.html

suddDiv = ""
i = 0
for product in sudd:
    if product["price"]["discount"]["reason"] == "":
        visibility = "hidden"
        display = "none"
    else:
        visibility = "visible"
        display = "initial"
    suddDiv += '''
                <div class="paddingDiv">
                    <a class="productFrame" href="/''' + product["type"] + "/" + product["name"] + '''">
                        <span class="discountReason" style="visibility: ''' + visibility + ''';">''' + product["price"]["discount"]["reason"] + '''</span>
                        <img class="productImg" src="''' + product["img"] + '''" width="300px" height="300px" alt="''' + product["name"] + '''">
                        <span class="productHeader">''' + product["name"] + '''</span>
                        <div>
                            <span class="productPriceText">''' + product["price"]["original"] + '''</span>
                            <span class="productPriceText discountedPrice line" style="display: ''' + display + ''';">''' + product["price"]["discount"]["price"] + '''</span>
                        </div>
                    </a>
                </div>'''
    i += 1

files["sudd"] = '''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>Sudd - Johanssudd</title>
        <meta name="keywords" content="sudd, sud, johanssudd, johansudd">
        <meta name="description" content="Vårt sortiment av sudd här på Johanssudd. Vi erbjuder en stor variation med ett alternativ för alla!">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp">
        <link rel="stylesheet" href="products.css">
        <script src="products.js"></script>
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
        <main class="pageContent">
            <span class="infoHeader">Våra Sudd</span>
            <span class="infoMainText">Alla gör fel ibland.</span>
            <div class="mainFrame">''' + suddDiv + '''
            </div>
        </main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
    </body>
</html>'''

# merchandise.html

merchandiseDiv = ""
i = 0
for product in merchandise:
    if product["price"]["discount"]["reason"] == "":
        visibility = "hidden"
        display = "none"
    else:
        visibility = "visible"
        display = "initial"
    merchandiseDiv += '''
                <div class="paddingDiv">
                    <a class="productFrame" href="/''' + product["type"] + "/" + product["name"] + '''">
                        <span class="discountReason" style="visibility: ''' + visibility + ''';">''' + product["price"]["discount"]["reason"] + '''</span>
                        <img class="productImg" src="''' + product["img"] + '''" width="300px" height="300px" alt="''' + product["name"] + '''">
                        <span class="productHeader">''' + product["name"] + '''</span>
                        <div>
                            <span class="productPriceText">''' + product["price"]["original"] + '''</span>
                            <span class="productPriceText discountedPrice line" style="display: ''' + display + ''';">''' + product["price"]["discount"]["price"] + '''</span>
                        </div>
                    </a>
                </div>'''
    i += 1

files["merchandise"] = '''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>Merchandise - Johanssudd</title>
        <meta name="keywords" content="merchandise, merch, johanssudd, johansudd">
        <meta name="description" content="Vårt sortiment av merchandise. Vi erbjuder många olika produkter för alla olika.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp">
        <link rel="stylesheet" href="products.css">
        <script src="products.js"></script>
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
                        <span class="topText">SUDD</span>
                    </a>
                    <a href="merchandise">
                        <span class="topText current">MERCHANDISE</span>
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
        <main class="pageContent">
            <span class="infoHeader">Vår Merchandise</span>
            <span class="infoMainText">Märkeskläderna för alla.</span>
            <div class="mainFrame">''' + merchandiseDiv + '''
            </div>
        </main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
    </body>
</html>'''

# jobb.html

files["jobb"] = '''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>Jobb - Johanssudd</title>
        <meta name="keywords" content="jobb, job, johanssudd, johansudd">
        <meta name="description" content="Information om tillgängliga jobb här på Johanssudd samt ett formulär för alla intresserade">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp">
        <link rel="stylesheet" href="jobb.css">
        <script src="jobb.js"></script>
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
                        <span class="topText">SUDD</span>
                    </a>
                    <a href="merchandise">
                        <span class="topText">MERCHANDISE</span>
                    </a>
                    <a href="jobb">
                        <span class="topText jobbText current">JOBB</span>
                    </a>
                    <div class="verticalLine"></div>
                    <a href="kundvagn">
                        <span class="topText cartText">KUNDVAGN</span>
                    </a>
                </div>
            </nav>
            <div class="cover"></div>
        </div>
        <main class="pageContent">
            <div class="paragraph">
                <span class="paragraphHeader big">Är du arbetslös?</span>
                <span>Vem försöker du lura? Såklart du är! Då har vi ett jobb som kan passa dig! Vi här på Johanssud tycker alltid om lite nya personer i vårt företag som har en passion för sudd likt oss! Om du skulle vara intresserad att fylla i formuläret under. Som anställd får du 10% rabatt på köp för över 3000 kr om du skulle få ett jobb här.</span>
            </div>
            <div class="paragraph">
                <span class="paragraphHeader big">Inte övertygad än?</span>
                <span class="beforeArguments">Såklart har vi förbrett några argument för varför vi erbjuder båda roligare och bättre jobb än andra företag.</span>
                <span class="arguments">
                    1.   Såklart får du en alldeles egen jobb-outfit (som du SÅKLART måste betala för själv).
                    <br>
                    2.   Som nämnt ovan, får du 10% rabatt på köp över 3000 kr.
                    <br>
                    3.   Du får jobba hemma utan att någonsin behöva lämna ditt hus, rena drömmen!
                    <br>
                    4.   Vi är inte som någon annan arbetsmiljö, vi är bättre.
                    <br>
                    5.   Och sist men inte minst får du såklart dela din passion för sudd med andra suddfanatiker.
                </span>
            </div>
            <div class="paragraph parThree">
                <span class="paragraphHeader big">Skaffa dig ett jobb</span>
            </div>
            <form autocomplete="off" name="jobbformulär" method="POST" data-netlify="true"> 
                <div class="field">
                    <input class="textInput" type="text" name="name" required>
                    <label class="textQuery" for="name">
                        <span class="textLabel">Namn</span>
                    </label>
                </div>
                <div class="field">
                    <input class="textInput" type="text" name="email" required>
                    <label class="textQuery" for="email">
                        <span class="textLabel">E-post</span>
                    </label>
                </div>
                <div class="radio" onchange="radioChanged()">
                    <span class="textLabel radioFieldQuery">Vad vill du bli?</span>
                    <div class="radioField">
                        <input type="radio" name="desire" value="designer">
                        <label class="radioQuery" for="designer">Designer</label>
                    </div>
                    <div class="radioField">
                        <input type="radio" name="desire" value="försäljare">
                        <label class="radioQuery" for="försäljare">Försäljare</label>
                    </div>
                    <div class="radioField">
                        <input type="radio" name="desire" value="annat">
                        <label class="radioQuery" for="annat">Annat</label>
                    </div>
                </div>
                <div class="field reasonOther">
                    <input class="textInput" type="text" name="desireOther">
                    <label class="textQuery" for="desireOther">
                        <span class="textLabel labelThree">Vad vill du bli?</span>
                    </label>
                </div>
                <div class="field">
                    <textarea class="textInput textarea" oninput="textareaChanged()" type="text" name="reason" rows="1" data-autoresize required></textarea>
                    <label class="textQuery textarea" for="reason">
                        <span class="textLabel">Varför skulle vi välja dig?</span>
                    </label>
                </div>
                <input class="submitButton" type="submit" value="ANSÖK">
            </form>
            <div class="notification">
                <span class="notificationText">Skickat! Vi återkommer snarast.</span>
            </div>
        </main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
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
    path = "./" + product["type"] + "/" + product["name"].lower() + ".html"
    if not os.path.exists(path):
        open(path, "x")

    variantDiv = ""
    try:
        for variant in product["variants"]:
            variantDiv += '''    
                    <div class="variants">
            '''
            options = ""
            for option in product["variants"][variant]:
                options += '''
                                <option>''' + option + '''</option>'''
            
            variantDiv += '''            <div class="variant">
                            <label class="variantName">''' + variant + '''</label>
                            <select class="variantSelect" required>
                                <option class="placeholderVariantOption" selected></option>''' + options + ''' 
                            </select>
                        </div>
                    '''
        variantDiv += "</div>"
    except KeyError:
        pass
    
    try:
        perspectives = ""
        for i in range(len(product["perspectives"])):
            first = ""
            if i == 0:
                first = " selected"
            perspectives += '''
                        <div class="smallProductFrame">
                            <img class="smallProductImg''' + first + '''" src="/imgs/''' + (product["name"] + "/" + product["name"] + " " + product["perspectives"][i]).replace(" ", "%20") + '.webp" width="100px" height="100px" alt="' + product["name"] + ''' Perspective: ''' + product["perspectives"][i] + '''" onmouseover="smallImgHovered(this)">
                        </div>'''
    except KeyError:
        pass

    open(path, "w").write('''<!DOCTYPE html>
<html lang="sv">
    <head>
        <title>''' + product["name"] + ''' - Johanssudd</title>
        <meta name="keywords" content="''' + product["name"].lower() + ''', johan sudd, johanssudd, johansudd">
        <meta name="description" content="Köp ''' + product["name"] + ". " + product["description"] +'''">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/imgs/website/Johan Favicon.webp" type="icon/gif">
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
                    <span class="topText cartItemsNumber">(0)</span>
                </a>
            </div>
        </nav>
        <main class="pageContent">
            <div class="notification">
                <span class="notificationText">Tillagd i kundvagnen!</span>
            </div>
            <div class="productFrame">
                <div class="imgFrame">
                    <img class="productImg" src="''' + product["img"] + '''" width="350px" height="350px" alt="''' + product["name"] + '''">
                    <div class="smallProductDiv">''' + perspectives + '''
                    </div>
                </div>
                <div class="textFrame">
                    <span class="productHeader">''' + product["name"] + '''</span>
                    <span class="productDescription">''' + product["description"] + '''</span>
                    <span class="productPriceText discountedPrice">''' + product["price"]["original"] + '''</span>
                    <span class="productPriceText line">''' + product["price"]["discount"]["price"] + '''</span>''' + variantDiv + '''
                    <div class="cartAddDiv">
                        <button class="cartAdd" onclick="buy(this)" readonly>Lägg I Kundvagn</button>
                    </div>
                </div>
            </div>
        </main>
        <span class="footerLogoText">Copyright © ''' + str(datetime.datetime.now().year) + ''' Johanssudd. All Rights Reserved</span>
    </body>
</html>''')

# Update git with new changes
 
os.system("git add -- . :!./.vscode/* :!*DS_Store :!./phoneInfo/*")
os.system("git commit -m 'updated!'")
os.system("git push")