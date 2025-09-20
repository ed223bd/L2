export class BarGraphManager {

  // IMORGON
  // Map data to "label" and "value"

  // Right now the graphs are static, make them 
  // dynamic using the data at the top of the file
  // Set svgHeight and svgWidth
  // Do some loop (forEach?) to create multiple 
  // bars, dsepending on data.length ??

  // Move formatting to StatisticsManager

  // Should take an array of objects as parameter
  createBar(data) {
    const svgWidth = 450
    const svgHeight = 300
    const svg = document.querySelector('svg')

    data.forEach((d, i) => {
      const x = i * 2 * 30 + 10

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

      rect.setAttribute('x', x)
      rect.setAttribute('y', 70)
      rect.setAttribute('height', 100)
      rect.setAttribute('width', 30)
      rect.setAttribute('fill', 'blue')
      rect.setAttribute('fill-opacity', 0.2)

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

      text.setAttribute('x', x)
      text.setAttribute('y', 90)
      text.textContent = 'Hej'

      // Add new element/s to SVG
      svg.appendChild(rect)
      svg.appendChild(text)
    })

  }
}

// Calls the createBar method, to enable
// viewing in browser
const barGraphManager = new BarGraphManager()
const data = [
  { label: "Stockholm", value: "21" },
  { label: "Sundsvall", value: "23" },
  { label: "Karlstad", value: "18" }
]
barGraphManager.createBar(data)