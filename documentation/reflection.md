I BarGraphManager
Namnet på mainAxis ( tidigare: yLine, mainYLine)

Namn på metoder, enkla "create"
Lätt att förstå vad de gör

I loopen för slices, många namn på olika x och y värden. 
xStart (tidigare: x1, x_start)
Samma med yStart och ...End för båda.

## Reflektion över namngivning

| Namn          | Förklaring         | Reflektion och regler från Clean Code  |
|---------------|--------------------|----------------------------------------|
| BarGraphManager | Namn på klassen som ansvarar för skapandet av ett bar graph diagram. | 
|
|

### Reflektion över kapitel 2 av Clean Code


## Reflektion över funktioner

| Namn          | Förklaring         | Reflektion och regler från Clean Code  |
|---------------|--------------------|----------------------------------------|
| createBarGraph | Namn på den publika funktion som orkestrerar över de privata funktionerna. | **Do One Thing** Denna funktion bryter mot regeln, då den både gör uträkningar och kallar på de privata funktionerna. createBarGraph håller sig till regeln **Function Arguments** då den endast tar två argument. De två argumenten skiljer sig och är inte lätt ihopblandade, något som Clean Code menar är viktigt när en funktion tar flera argument. |
| drawBar | Namn på en privat funktion i BarGraphManager som ritar ut en stapel. | **Do One Thing** drawBar gör endast en sak, vilket är att rita en stapel baserat på de parametrar som den tar emot. drawBar bryter dock mot **Function Arguments** då den tar emot 5 parametrar, men Clean Code boken säger max 3 parametrar. I detta fall tycker jag att de 5 parametrarna är nödvändiga för att drawBar ska hålla sig till regeln om att endast göra en sak. |
| drawValue | Namn på en privat funktion i BarGraphManager som ritar ut en text. | **Small** The drawValue is a small function, only a seven lines long. **Verbs and Keywords** The function name, matched with parameter names, makes it clear what is does. It takes the x and y position and on that point, draws the value. |
| drawCircle | Namn på en privat funktion i PieChartManager som ritar en cirkel och kallar på metoden drawCircleValue. | **Have No Side Effects** drawCircle bryter mot denna regel då den kallar på metoden för att rita ut värden. Clean Code förklarar att det är felaktigt, för att någon skulle kunna kalla på drawCircle och bara vilja ha en cirkel men med den struktur som är bestämd nu får de även med värden. drawCircle borde döpas om till drawCircleAndValue för att undvika förvirring. Ett annat alternativ skulle vara att ta bort drawCircleValue från drawCircle och alltid kalla på dem separat. |
| setTheme | Namn på en publik funktion i ThemeManager som validerar och bestämmer det tema som diagrammen ska ritas med. | **Blocks and Indenting** i setTheme finns kontrollsatser i form av if-kontroller och enligt Clean Code borde det endast finnas en rad i en sådan. För att uppfylla denna regel, borde jag flytta ut innehållet i if-kontrollerna till egna funktioner och i if-kontrollen endast kalla på de respektive funktionerna. |

### Reflektion över kapitel 3 av Clean Code

FUNCTIONS - Kapitel 3

- Do one thing, ja, men createBarGraph är "okkestrerande" för att det ska bli enkelt att använda modulen. Om det inte varit en modul, mer uppdelat? I OOP känns det rimligt att ha bara en publik metod som "drar igång" de andra. I min createBarGraph (och createPieChart?) behöver flera funktioner samma parametrar och då behöver uträkningarna finnas i den orkestrerande metoden.
- None or few function arguments, ja, men för att draw funktionen ska skilja sig från create (med uträkningar), behöver uträkningarna skickas till draw funktionen. Ser poängen i "... testing every combination of values can be daunting."(s. 40). Han gör också en poäng av att många argument lätt blandas ihop (message, expected, actual). I min kod är argumenten inte lika, men de behövs alla för att kunna draw en specifik del.
- Same nouns, ja. Draw för att ta emot värden och bara rita ut. "create" för när det finns calculations
- Two arguments are ok if they naturally belong together, like passing a point (x, y) or coordinates (lon, lat). "natural ordering" 
- In the example of try/catch blocks, making it into smaller funktions makes for a lot of scrolling. I think a short try/catch would be good to keep together, butif there are many lines in the try block, then yes, break it out and use a good name for what the function should "try". He says not to be afraid of using long names.
- Function names should start with a verb "deleteAllNumbersAndLetters()"



## Egen reflektion över kodkvalitet
(ca en halv sida om mina erfarenheter av kodkvalitet)
Använd begrepp från boken.
Abstractions, intent, monads, dyads, triads?



Det verkar finnas en stor gråzon inom kodkvalitet. I vissa typer av system ska man göra på ett sätt, medan det är helt fel i andra system. Från boken Clean Code framgår det att funktioner endast ska göra en sak, men samtidigt ger Robert Cecil Martin exempel på hur man hanterar sido-effekter i en funktion vilken insinuerar att det finns tillfällen då en funktion behöver ha en sido-effekt som den kallar på. 

Den främsta lärdomen jag tar med mig är att dela upp mina funktioner, till mindre delar. Min erfarenhet är att denna utbildning redan från början gett en god insyn i hur man bör namnge variabler och det känns upplyftande att det sätt att namnge som *Clean Code* rekommenderar, är samma sätt som vi har blivit introducerade till tidigt i utbildningen. Det jag tar med mig från den här kursen, gällande namngivning, är att våga bestämma långa namn framförallt på funktioner. Långa variabelnamn kan bli stökigt och försämra readability om det används många gånger i ett kodblock.




