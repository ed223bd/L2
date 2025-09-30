import { ValidationManager, BarGraphManager, PieChartManager, ThemeManager } from '../src/index.js'

const validationManager = new ValidationManager()
const themeManager = new ThemeManager()

// Set the id, width and height to the same values as the SVG element.
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)

const rawData = [
  { label: 'A', value: 24 },
  { label: 'B', value: 40 },
  { label: 'C', value: 12 },
  { label: 'D', value: 26 },
  { label: 'E', value: 30 },
  { label: 'F', value: 22 },
  { label: 'G', value: 28 },
  { label: 'H', value: 27 },
  { label: 'I', value: 23 }
]

const data = validationManager.validateData(rawData)
const theme = themeManager.setTheme('themeB')

// Calling the "create" methods
barGraphManager.createBarGraph(data, theme)
pieChartManager.createPieChart(data, theme)
