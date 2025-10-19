/**
 * Sets the theme to be used in the diagrams.
 */
export class ThemeManager {
  /**
   * Takes a string and returns a theme if it is a match.
   *
   * @param {string} chosenTheme - The theme requested.
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
        font: 'Times New Roman',
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

  setFontSize (chosenSize) {
    if (typeof chosenSize !== 'string') {
      throw new Error('Font size needs to be a string in the format "15px')
    }

    const fontSize = chosenSize

    return fontSize
  }
}
