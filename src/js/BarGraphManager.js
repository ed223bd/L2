export class BarGraphManager {

  // IMORGON

  // Set svgHeight and svgWidth
  // Do some loop (forEach?) to create multiple 
  // bars, dsepending on data.length ??

  // Move formatting to StatisticsManager

  // Should take an array of objects as parameter
  createBarGraph(data) {
    const svgWidth = 450
    const svgHeight = 300
    const svg = document.querySelector('svg')

    // to give space for vertical line with markings
    const margin = 30 

    const barWidth = Math.floor((svgWidth - margin) / (data.length * 1.2))
    const highestValue = Math.max(...data.map(d => d.value))

    data.forEach((d, i) => {
      console.log(d.label, d.value)
     
      // Margin for top of bars and under
      const barHeight = (d.value / highestValue) * (svgHeight - margin - margin)

      // 1.2 is padding between bars
      const x = margin + i * 1.2 * barWidth 
      const y = (svgHeight - barHeight - margin)
      const barLabel = d.label

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

      rect.setAttribute('x', x)
      rect.setAttribute('y', y)
      rect.setAttribute('height', barHeight)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('fill', 'blue')
      rect.setAttribute('fill-opacity', 0.2)
      rect.setAttribute('stroke', 'black')

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

      text.setAttribute('x', x)
      text.setAttribute('y', 290)
      text.textContent = barLabel

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
  { label: "Luleå", value: "21" },
  { label: "Sundsvall", value: "23" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "21" },
  { label: "Sundsvall", value: "23" },
  { label: "Karlstad", value: "12" },
]
  
barGraphManager.createBarGraph(data)
