import { StatisticsManager, BarGraphManager, PieChartManager } from '../src/index.js'

// New instances and set values for constructor
const statisticsManager = new StatisticsManager()
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)

const rawData = [
  { label: 'Luleå', value: 24 },
  { label: 'Sundsvall', value: 40 },
  { label: 'Karlstad', value: 12 },
  { label: 'Luleå', value: 24 },
  { label: 'Sundsvall', value: 30 },
  { label: 'Karlstad', value: 12 }
]

const data = statisticsManager.validateData(rawData)

// Calling the "create" methods
barGraphManager.createBarGraph(data)
pieChartManager.createPieChart(data)
