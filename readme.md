# Procesverslag
**Auteur:** -Bo Heins-

Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.



## Bronnenlijst
1. -bron 1-
2. -bron 2-
3. -...-



## Eindgesprek (week 7/8)

-dit ging goed & dit was lastig-

**Screenshot(s):**

-screenshot(s) van je eindresultaat-



## Voortgang 3 (week 6)

### Stand van zaken
In deze korte periode ben ik bezig geweest met het verbeteren van mijn code en mijn website toegangelijker te maken. Zo heb ik een :hover :actice states toegevoegd. Ook heb ik geprobeerd mij te verdiepen in de screenreaders, hierbij heb ik verschillende youtube filmpjes gekeken hoe je de screenreader moet gebruiken en heb ik de verschillende toetsen voor de commando's voor mezelf op geschreven. Maar toch blijft het heel moeilijk voor mij om de screenreader te begrijpen.

**Screenshot(s):**

### Agenda voor meeting
1. Hoe moet je een screenreader gebruiken
2. Hoe kan je de website nog toegangelijker maken
3. Hoe kan ik mijn heading in een carousel een vaste plek geven.
4. Hoe gebruik je een :before en :after voor een knop waarbij de achtergrond veranderd van links naar rechts.

### Verslag van meeting



## Voortgang 2 (week 5)

### Stand van zaken
Ik vond het best lastig worden, omdat ik best vaak mijn html of css moest aanpassen. Doordat ik bijvoorbeeld te veel sections had gebruikt, maar als je één ding aanpast in je html en alles wordt aangesproken met nth-of-typ(n), moet je alles aanpassen omdat het anders niet meer werkt. En dit was steeds best frusterend, maar uiteindelijk is het me toch gelukt om 2 pagina's responsive te maken.

**Screenshot(s):**

![screenshot(s) van hoe ver ik ben](images/voortgang2-1.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-2.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-3.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-4.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-5.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-6.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-7.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-8.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-9.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-10.png)
![screenshot(s) van hoe ver ik ben](images/voortgang2-11.png)

### Agenda voor meeting

1. Hoe kan je een heading op een vaste plek zetten in de carroussel
2. CSS animatie
3. Automatische slider

### Verslag van meeting
De header moet uit de section om te zorgen dat hij op een vaste plek kan blijven staan boven de carroussel.

Ik moet mijn website nog gebruiksvriendelijk mmaken voor mensen die alleen gebruik kunnen maken van hun toetstenbord. Ook moet ik alle states uitwerken, zoals :focus en :active. En alle images een alt text geven, zodat screenreaders de afbeeldingen kunnen omschrijven aan de gebruiker.


## Voortgang 1 (week 3)

### Stand van zaken

Ik vondt het heel leuk om aan me website te werken, vooral in het begin. Ik heb hierdoor ook veel tijd in gestoken. Maar ik heb heel veel moeite gehad met alle verschillende sections/ articles. Toen ik de eerste article buiten de main wilde maken, kreeg ik het niet voormekaar om deze article aan te spreken met css, daarom heb ik ervoor kozen om alle sections en articles in de main te zetten zodat ik de home pagina wel kon maken.Ook heb ik al geprobeerd om in de header interacties werkend te maken. Als je op de zoek knop drukt wordt de zoekbalk zichtbaar, als je over de linkjes gaat in de header worden ze rood en bold en als je over de winkelwagen gaat met je muis wordt je winkelwagen zichtbaar. Ik heb dus ook verschillende eventlisteners geprobeerd te gebruiken. Ook is de webshop een beetje responsive voor de verschillende telefoonschermen.

**Screenshot(s):**

![screenshot(s) van hoe ver ik ben](images/voortgang1-1.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-2.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-3.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-4.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-5.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-6.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-7.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-8.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-9.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-10.png)
![screenshot(s) van hoe ver ik ben](images/voortgang1-11.png)


### Agenda voor meeting

-1. Hoe we kunnen zorgen dat website zo responive mogelijk worden?
2.Moeten we het hamburger menu laten werken?
3. Hoe kan je met 2 html pagina's en 1 css ervoor zorgen dat de nth-of-type(n) goed werkt, want als je bijvoorbeeld de eerste p op de ene html bold wilt maken, maar de eerste p op de andere html niet bold moet worden.
4.Hoe kan je een caroussel maken?-

### Verslag van meeting

transform: translateX();
performt veel beter op de mobiel dan clac()

Verschil tussen een button en een anchor:
-anchor linkt naar een andere pagina
-button is een actie op de pagina (bijvoorbeeld menu iconon voor het hamburger menu)

Hamburger menu hoef je niet werkent te maken. Maar als je het wel gaat doen moet je eerst kritisch kijken of het ook echt handig is.
De hamburger menu kan je maken door de class aan of uit te zetten, de nav element een achtergrondskleur te geven, geeft het een position absolute en positioneer het buiten het scherm bvb door transform: translateX(100%). Class 'menuactive' op de body zetten en dan in de css 'body.menuactive nav' met left: 0; en op de nav een transition.

gebruik geen sections maar divs als het gaat om het style van de elementen.

interface afbeeldingen (voor de sier of sfeer):
in de css background-img: url();
content afbeeldingen (zijn bijvoorveeld afbeeldingen van het product die je verkoopt):
in de html was img tag.

voor een carrousel kan je overflow-x: scroll gebruiken.

om nth-of-type goed te laten verlopen met 2 html pages kan je de body een class of id geven.



## Intake (week 1)

**Je startniveau:** -tussen blauw en rood in-

**Je focus:** -responsive plane-

**Je opdracht:** -lhttps://maretti.com/index.php-

**Screenshot(s):**

![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_homepage_laptop.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_homepage_telefoon.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_marcelwoltering_laptop.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_marcelwoltering_telefoon.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_navigatie_laptop.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_navigatie_teleoon.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_productoverzicht_hover_laptop.png)
![screenshot(s) die een goed beeld geven van de website die je gaat maken](images/maretti_productoverzicht_laptop.png)

**Breakdown-schets(en):**

![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-](images/intake_opdracht_7sep_01.png)
![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-](images/intake_opdracht_7sep_02.png)
![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-](images/intake_opdracht_7sep_03.png)
![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-](images/intake_opdracht_7sep_04.png)
![-voorlopige breakdownschets(en) van een of beide pagina's van de site die je gaat maken-](images/intake_opdracht_7sep_05.png)
