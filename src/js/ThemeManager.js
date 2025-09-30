/**
 * Sets the theme to be used in the diagrams.
 */
export class ThemeManager {
  /**
   * Takes a string and 
   * @param {string} chosenTheme - The
   * @returns {} - jefls
   */
  setTheme (chosenTheme) {
    if (chosenTheme !== 'themeA' && chosenTheme !== 'themeB') {
      throw new Error('Choose one of the themes available')
    }

    if (chosenTheme === 'themeA') {
      const themeA = {
        color: 'blue',
        colorOpacity: 0.2,
        border: 'black',
        borderWidth: '1',
        font: 'Times new Roman',
        fontColor: 'black'
      }
      return themeA
    }

    if (chosenTheme === 'themeB') {
      const themeB = {
        color: 'green',
        colorOpacity: 0.5,
        border: 'darkgreen',
        borderWidth: '2',
        font: 'Arial',
        fontColor: 'black'
      }
      return themeB
    }
  }
}
