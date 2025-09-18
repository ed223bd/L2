export class BarGraphManager {
  // TODO: remove. Just to test the creation of graphs
  // Should come from statisticsManager as "label"
  // and "value" (standard for all graphs)
  data = [
    { city: "Stockholm", rainAmount: "21" },
    { city: "Sundsvall", rainAmount: "23" },
    { city: "Karlstad", rainAmount: "18" }
  ]

  createBar() {
    const svgWidth = 450
    const svgHeight = 300
    const svg = document.querySelector('svg')

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    rect.setAttribute('x', 50)
    rect.setAttribute('y', 70)
    rect.setAttribute('height', 100)
    rect.setAttribute('width', 30)
    rect.setAttribute('fill', 'blue')
    rect.setAttribute('fill-opacity', 0.2)

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', 30)
    text.setAttribute('y', 90)
    text.textContent = 'Hej'

    // Add new element/s to SVG
    svg.appendChild(rect)
    svg.appendChild(text)
  }
}

// Calls the createBar method, to enable
// viewing in browser
const barGraphManager = new BarGraphManager()
barGraphManager.createBar()