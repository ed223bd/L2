# Tester

### BarGraphManager

Förkrav: Det finns en Test-app med en data-array av objekt i app.js.
Förkrav: Test-appens index.html är öppnad med Live Server.

#### Testfall 1 - bredd

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

#### Testfall 2 - höjd
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



#### Testfall 3 - värden
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


### PieChartManager



### StatisticsManager

