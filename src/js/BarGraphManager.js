export class BarGraphManager {

  // IMORGON

  // Set svgHeight and svgWidth
  // Do some loop (forEach?) to create multiple 
  // bars, dsepending on data.length ??

  // Move formatting to StatisticsManager

  // Should take an array of objects as parameter
  createBar(data) {
    const svgWidth = 450
    const svgHeight = 300
    const svg = document.querySelector('svg')

    // to give space for vertical line with markings
    const leftMargin = 30 

    const barWidth = Math.floor((svgWidth - leftMargin) / (data.length * 1.2))

    data.forEach((d, i) => {
      // 30 is space on left side (for the lines)
      // 1.2 is padding between
      const x = leftMargin + i * 1.2 * barWidth 

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

      rect.setAttribute('x', x)
      rect.setAttribute('y', 170)
      rect.setAttribute('height', 100)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('fill', 'blue')
      rect.setAttribute('fill-opacity', 0.2)
      rect.setAttribute('stroke', 'black')

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

      text.setAttribute('x', x)
      text.setAttribute('y', 290)
      text.textContent = 'Test'

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
  { label: "Karlstad", value: "18" },
  { label: "Stockholm", value: "21" },
  { label: "Sundsvall", value: "23" },
  { label: "Karlstad", value: "18" },
]
  
barGraphManager.createBar(data)
