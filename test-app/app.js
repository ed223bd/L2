import { StatisticsManager, BarGraphManager, PieChartManager, ThemeManager } from '../src/index.js'

// New instances and set values for constructor
const statisticsManager = new StatisticsManager()
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)

const rawData = [
  { label: 'A', value: 7 }
]

const data = statisticsManager.validateData(rawData)

// Calling the "create" methods
barGraphManager.createBarGraph(data)
pieChartManager.createPieChart(data)
