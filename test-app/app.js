import { ValidationManager, BarGraphManager, LineGraphManager, ThemeManager } from '../src/index.js'

// Instantiating the classes for validation
// and setting the theme.
const validationManager = new ValidationManager()
const themeManager = new ThemeManager()

// Set the id, width and height to the same values
// as the SVG element in the app's index.html.
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const lineGraphManager = new LineGraphManager('lineGraph', 450, 300)

// Set the data to create diagrams from.
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

// Validate the data before it is passed on to diagrams.
const data = validationManager.validateData(rawData)

// The available options are 'themeA' or 'themeB'.
const theme = themeManager.setTheme('themeA')

// Choose font size
const fontSize = themeManager.setFontSize(15)

// Create the diagrams
barGraphManager.createBarGraph(data, theme, fontSize)
lineGraphManager.createLineGraph(data, theme, fontSize)
