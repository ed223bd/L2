import { ValidationManager, BarGraphManager, PieChartManager } from '../src/index.js'

// New instances and set values for constructor
const validationManager = new ValidationManager('test', 450)
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)

const rawData = [
  { label: 'A', value: 'a' }
]

const data = validationManager.validateData(rawData)

// Calling the "create" methods
barGraphManager.createBarGraph(data)
pieChartManager.createPieChart(data)
