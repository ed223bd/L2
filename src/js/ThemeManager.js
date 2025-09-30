/**
 *
 */
export class ThemeManager {
  /**
   *
   * @param chosenTheme
   */
  setTheme (chosenTheme) {
    if (chosenTheme === 'themeA') {
      const themeA = {
        fill: 'blue',
        opacity: 0.2,
        border: 'black',
        borderWidth: '1',
        font: 'Arial'
      }
      return themeA
    }

    if (chosenTheme === 'themeB') {
      const themeB = {
        fill: 'green',
        opacity: 0.5,
        border: 'darkgreen',
        borderWidth: '2',
        font: 'Times new Roman'
      }
      return themeB
    }
  }
}
