export class PieChartManager {
  createPieChart(data) {
    const svg = document.querySelector('#pieChart')

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    const svgWidth = 450
    const svgHeight = 300
    // TODO: remove. Hard coded to test the graphics
    // path.setAttribute('d', `
    //   M 100 100
    //   L 150 100
    //   A 50 50 0 0 1 100 150
    //   Z
    // `)
    path.setAttribute('d', `
      M ${svgWidth / 2} ${svgHeight / 2}
      L 325 250
      A 110 110 0 0 1 220 285
      Z 
    `
    )

    path.setAttribute('fill', 'green')
    path.setAttribute('fill-opacity', 0.5)
    path.setAttribute('stroke', 'black')
    path.setAttribute('stroke-width', 2)
    svg.appendChild(path)
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