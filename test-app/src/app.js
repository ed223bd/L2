import ThemeManager from '/module/ThemeManager.js'
import SquareManager from '/module/SquareManager.js'

// New instance of thememanager and decide a theme
const themeManager = new ThemeManager()
const theme = themeManager.setTheme('themeA')

// New instance of square with 75x size and the set theme
const square = new SquareManager(75, theme)