# Testöversikt

## Översikt - ValidationManager

| Vad har testats?                  | Hur har det testats? | Testresultat |
|-----------------------------------|----------------------|--------------|
| 1.1 Ett meddelande visas om rawData inte är en array, eller om arrayen är tom. | Manuellt | ✅ |
| 1.2 Ett meddelande visas om data-array är tom. | Manuellt | ✅ |
| 2.1 Ett meddelande visas om arrayen inte innehåller ett objekt. | Manuellt | ✅ |
| 2.2 Ett meddelande visas om data-arrayen inte har en "label" som är en string. | Manuellt | ✅ |
| 2.3 Ett meddelande visas om objekt i data-arrayen inte har ett "value" som är ett nummer.  | Manuellt | ✅ |
| 2.4 Beskrivning: Ett meddelande visas om objekt i data-arrayen inte har ett "value" med ett positivt nummer. | Manuellt | ✅ |


## Översikt - ThemeManager

| Vad har testats?                  | Hur har det testats? | Testresultat |
|-----------------------------------|----------------------|--------------|
| 1.1 Vid ändring av tema, uppdateras diagrammet. | Manuellt | ✅ |
| 1.2 Vid ej existerande tema, ska ett meddelande visas. | Manuellt | ✅ |
| 2.1 Teckenstorlek uppdateras för labels och values. | Manuellt | ✅ |
| 2.2 Ett meddelande ska visas om värdet för teckenstorlek inte är ett nummer. | Manuellt | ✅ |


## Översikt - BaseChart

| Vad har testats?                  | Hur har det testats? | Testresultat |
|-----------------------------------|----------------------|--------------|
| 1.1 En axis ritas, med det antal markeringslinjer som passar ett stort högsta värde. | Manuellt | ✅ |
| 1.2 En axis ritas, med det antal markeringslinjer som passar ett litet högsta värde. | Manuellt | ✅ |
| 2.1 Ett extra steg ritas, när värdet i data-arrayen överskrider det senaste steget på axis. | Manuellt | ✅ |


## Översikt - BarGraphManager

| Vad har testats?                  | Hur har det testats? | Testresultat |
|-----------------------------------|----------------------|--------------|
| 1.1 Ett diagram skapas med få antal staplar, lika många som det finns objekt i rawData-arrayen från Test-app. | Manuellt   | ✅           |
| 1.2 Ett diagram skapas med många staplar, lika många som det finns objekt i rawData-arrayen. | Manuellt | ✅ |
| 2.1 Ett diagram skapas med staplar med högt värde. Staplarnas höjd stämmer överens med axis-linjen till vänster i diagrammet. | Manuellt | ✅ |
| 2.2 Ett diagram skapas med staplar med lågt värde. Staplarnas höjd stämmer överens med axis-linjen till vänster i diagrammet. | Manuellt | ✅ |
| 3.1 Ett diagram skapas med rätt "label" och "value". | Manuellt | ✅ |


## Översikt - LineGraphManager

| 1.1 Ett diagram skapas med rätt antal punkter | Manuellt | ✅ |
| 1.2 En axis ritas, med det antal markeringslinjer som passar ett litet högsta värde. | Manuellt | ✅ |
| 2.1 Ett diagram skapas med rätt "label" och "value". | Manuellt | ✅ |
