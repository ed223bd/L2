/**
 *
 */
export class ThemeManager {
  /**
   *
   */
  setTheme (chosenTheme) {
    if (chosenTheme === 'themeA') {
      const themeA = {
        fill: 'blue',
        opacity: 0.2,
        border: 'black',
        font: 'Arial'
      }
      return themeA
    }

    if (chosenTheme === 'themeB') {
      const themeB = {
        fill: 'green',
        opacity: 0.2,
        border: 'darkgreen',
        font: 'Times new Roman'
      }
      return themeB
    }
  }
}
