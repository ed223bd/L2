export class PieChartManager {
  createPieChart(data) {
    const svg = document.querySelector('#pieChart')

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    circle.setAttribute('cx', 120)
    circle.setAttribute('cy', 120)
    circle.setAttribute('r', 90)
    circle.setAttribute('fill', 'blue')
    svg.appendChild(circle)
  }
}

const pieChartManager = new PieChartManager()
const data = [
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
]
pieChartManager.createPieChart(data)