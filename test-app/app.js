import { BarGraphManager, PieChartManager } from '../src/index.js'

// New instances and set values for constructor
const barGraphManager = new BarGraphManager('barGraph', 450, 300)
const pieChartManager = new PieChartManager('pieChart', 450, 300)

const data = [
  { label: 'Luleå', value: '24' },
  { label: 'Sundsvall', value: '40' },
  { label: 'Karlstad', value: '12' },
  { label: 'Luleå', value: '24' },
  { label: 'Sundsvall', value: '30' },
  { label: 'Karlstad', value: '12' }
]
// Calling the "create" methods
barGraphManager.createBarGraph(data)
pieChartManager.createPieChart(data)
