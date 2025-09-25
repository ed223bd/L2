import { StatisticsManager, BarGraphManager, PieChartManager, LineGraphManager } from '../src/index.js'

// New instances and set values for constructor
const statisticsManager = new StatisticsManager()
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)
const lineGraphManager = new LineGraphManager('lineGraph', 450, 300)

const rawData = [
  { label: 'Luleå', value: 24 },
  { label: 'Sundsvall', value: 40 },
  { label: 'Karlstad', value: 12 },
  { label: 'Luleå', value: 24 },
  { label: 'Sundsvall', value: 30 },
  { label: 'Karlstad', value: 12 }
]

const data = statisticsManager.validateData(rawData)

const rawLineGraphData = [
  { label: '2019', value1: 11, value2: 14, value3: 13 },
  { label: '2018', value1: 16, value2: 11, value3: 15 },
  { label: '2017', value1: 15, value2: 14, value3: 12 }
]

// const lineGraphData = statisticsManager.validateLineGraphData(rawLineGraphData)

// Calling the "create" methods
barGraphManager.createBarGraph(data)
pieChartManager.createPieChart(data)
lineGraphManager.createLineGraph(rawLineGraphData)
