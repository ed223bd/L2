import { Validator, BarGraph, LineGraph, Theme } from '../src/index.js'

// Instantiate the classes for validation and theme.
const validator = new Validator()
const theme = new Theme()

// Set the id, width and height to the same values
// as the SVG element in the app's index.html.
const barGraph = new BarGraph('barGraph', 450, 300)
const lineGraph = new LineGraph('lineGraph', 450, 300)

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
const data = validator.validateData(rawData)

// The available options are 'themeA' or 'themeB'.
const selectedTheme = theme.setTheme('themeA')

// Choose font size
const selectedFontSize = theme.setFontSize(15)

// Create the diagrams
barGraph.createBarGraph(data, selectedTheme, selectedFontSize)
lineGraph.createLineGraph(data, selectedTheme, selectedFontSize)
