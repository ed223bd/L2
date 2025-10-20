# Tester

### Förkrav

Förkrav: Det finns en Test-app med en rawData-array av objekt i app.js.
Förkrav: Test-appens index.html har ett SVG-element med samma id, bredd och höjd som i constructor för BarGraphManager.
Förkrav: Test-appens index.html är öppnad med Live Server.

### ValidationManager

#### Testfall 1 - Array

Test 1.1
Beskrivning: Ett meddelande visas om rawData inte är en array, eller om arrayen är tom.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData till att vara ett objekt:
  const rawData = { label: 'A', value: 7 }
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Data must be a non-empty array". 

Test 1.2 
Beskrivning: Ett meddelande visas om data-array är tom.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData till en tom array:
  const rawData = []
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Data must be a non-empty array". 


#### Testfall 2 - Värden

Test 2.1 
Beskrivning: Ett meddelande visas om arrayen inte innehåller ett objekt.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData till en array utan objekt:
  const rawData = [1]
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Data needs be sent as objects in an array and the object cannot be null".

Test 2.2
Beskrivning: Ett meddelande visas om data-arrayen inte har en "label" som är en string.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData-arrayen till att innehålla ett objekt med felaktig "label":
  const rawData = [{ l: 1, value: 24 }]
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Each label needs to be a string, that is not empty"

2.3 
Beskrivning: Ett meddelande visas om objekt i data-arrayen inte har ett "value" som är ett nummer. 

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData-arrayen till att innehålla ett objekt med felaktigt "value":
  const rawData = [{ label: 'A', value: 'a' }]
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Value needs to be a non-negative number".

2.4
Beskrivning: Ett meddelande visas om objekt i data-arrayen inte har ett "value" med ett positivt nummer.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Ändra rawData-arrayen till att innehålla ett objekt med felaktigt "value":
  const rawData = [{ label: 'A', value: -24 }]
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Value needs to be a non-negative number".

### ThemeManager

#### Förkrav
ThemeA är valt i app.js 
```javascript
const theme = themeManager.setTheme('themeA')
```

Teckenstorlek är bestämt i app.js
```javascript
const fontSize = themeManager.setFontSize(15)
```


#### Testfall 1 - Bestämma tema

Test 1.1 
Beskrivning: Vid ändring av tema, uppdateras diagrammet.

Steg:
1. Öppna Test-appens app.js.
2. Ändra i den string som skickas till setTheme metoden:
  const theme = themeManager.setTheme('themeB')
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Diagrammet uppdateras till det nya temat.
![alt text](./img/image5.png)

Test 1.2
Beskrivning: Vid ej existerande tema, ska ett meddelande visas.

Steg:
1. Öppna Test-appens app.js.
2. Ändra i den string som skickas till setTheme metoden:
  const theme = themeManager.setTheme('themeC')
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Choose one of the themes available"

#### Testfall 2 - Bestämma teckenstorlek

Test 2.1
Beskrivning: Teckenstorlek uppdateras för labels och values.

Steg:
1. Öppna Test-appens app.js.
2. Ändra i numret som skickas till setFontSize:
  const fontSize = themeManager.setFontSize(25)
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Labels och values får en större teckenstorlek.

Test 2.2 
Beskrivning: Ett meddelande ska visas om värdet för teckenstorlek inte är ett nummer.

Steg: 
1. Öppna Test-appens app.js.
2. Ändra i värdet som skickas till setFontSize, till en sträng:
  const fontSize = themeManager.setFontSize('15')
3. Observera console i webbläsaren.

Förväntad utdata: Ett meddelande "Font size needs to be a number."


### BaseChart

#### Testfall 1 - Axis steg

Test 1.1 
Beskrivning: En axis ritas, med det antal markeringslinjer som passar ett stort högsta värde.

Steg:
1. Öppna Test-appens app.js.
2. Ändra rawData arrayen till att innehålla endast ett stort värde:
  { label: 'A', value: 120 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Markeringslinjer för varje tiotal, upp till 120.
![alt text](./img/image11.png)

Test 1.2
Beskrivning: En axis ritas, med det antal markeringslinjer som passar ett litet högsta värde.

Steg:
1. Öppna Test-appens app.js.
2. Ändra rawData arrayen till att innehålla endast ett litet värde:
  { label: 'A', value: 8 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Markeringslinjer för varje tal, upp till 8. 
![alt text](./img/image12.png)

#### Testfall 2 - Värdet överskrider senaste steget

Test 2.1
Beskrivning: Ett extra steg ritas, när värdet i data-arrayen överskrider det senaste steget på axis.

Steg:
1. Öppna Test-appens app.js.
2. Ändra högsta värdet i rawData arrayen till 42:
  const rawData = [
  { label: 'A', value: 24 },
  { label: 'B', value: 42 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
]
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Steg för värde 45 ritas ut.
![alt text](./img/image13.png)


### BarGraphManager

#### Testfall 1 - Bredd

Test 1.1
Beskrivning: Ett diagram skapas med få antal staplar, lika många som det finns objekt i rawData-arrayen från Test-app.

Steg:
1. Öppna Test-appens app.js och bestäm värden i rawData-arrayen.
2. Sätt värden till: 
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: 3 staplar skapas.
![alt text](./img/image.png)


Test 1.2
Beskrivning: Ett diagram skapas med många staplar, lika många som det finns objekt i rawData-arrayen.

Steg:
1. Öppma Test-appens app.js och bestäm värden i rawData-arrayen.
2. Sätt värden till:
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: 9 staplar skapas.
![alt text](./img/image2.png)


#### Testfall 2 - Höjd
Test 2.1

Beskrivning: Ett diagram skapas med staplar med högt värde. Staplarnas höjd stämmer överens med axis-linjen till vänster i diagrammet.

Steg:
1. Öppna Test-appens app.js och bestäm värden i rawData-arrayen.
2. Sätt värden till: 
  { label: 'A', value: 25 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: En stapel skapas som når till 25 på axis-linjen.
![alt text](./img/image3.png)

Test 2.2
Beskrivning: Ett diagram skapas med staplar med lågt värde. Staplarnas höjd stämmer överens med axis-linjen till vänster i diagrammet.

Steg:
1. Öppna Test-appens app.js och bestäm värden i rawData-arrayen.
2. Sätt värden till:
  { label: 'A', value 7}
3. Observera diagrammet i webbläsaren.

Förväntad utdata: En stapel skapas som når till 7 på axis-linjen.
![alt text](./img/image4.png)



#### Testfall 3 - Värden
Test 3.1
Beskrivning: Ett diagram skapas med rätt "label" och "value".
Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Sätt värden till:
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Ett diagram skapas där "label" och "value" stämmer överens med datan.
![alt text](./img/image2.png)


### LineGraphManager

Förkrav: Det finns en Test-app med en rawData-array av objekt i app.js.
Förkrav: Test-appens index.html har ett SVG-element med samma id, bredd och höjd som i constructor för BarGraphManager.
Förkrav: Test-appens index.html är öppnad med Live Server.

#### Testfall 1 - Punkter

Test 1.1
Beskrivning: Ett diagram skapas med rätt antal punkter.

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Sätt värden till:
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: Ett diagram skapas med 9 punkter, med linjer mellan.
![alt text](./img/image10.png)


#### Testfall 2 - Värden

Test 2.1 
Beskrivning: Ett diagram skapas med rätt "label" och "value".

Steg:
1. Öppna Test-appens app.js och bestäm värden.
2. Sätt värden till:
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
3. Observera diagrammet i webbläsaren.

Förväntad utdata: De rätta labels och values visas i diagrammet.
![alt text](./img/image10.png)

