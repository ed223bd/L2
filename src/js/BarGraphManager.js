export class BarGraphManager {

  // Move formatting to StatisticsManager

  // Should take an array of objects as parameter
  createBarGraph (data) {
    // Width and height are set in the SVG element, but needs 
    // to be calculated with for sizing of the bars.
    const svgWidth = 450
    const svgHeight = 300
    const svg = document.querySelector('#barGraph')

    // to give space for vertical line with markings
    const margin = 30
    const leftMargin = 50
    const topMargin = 70

    const barWidth = Math.floor((svgWidth - leftMargin) / (data.length * 1.2))
    const highestValue = Math.max(...data.map(d => d.value))

    data.forEach((d, i) => {
      // TODO: remove. For debugging
      console.log(d.label, d.value)

      // Margin for top of bars and under
      const barHeight = (d.value / highestValue) * (svgHeight - margin - topMargin)

      // 1.2 is padding between bars
      const x = leftMargin + i * 1.2 * barWidth
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

    const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    axisLine.setAttribute('x1', 10)
    axisLine.setAttribute('x2', 10)
    axisLine.setAttribute('y1', 10)
    axisLine.setAttribute('y2', svgHeight - margin)
    axisLine.setAttribute('stroke', 'black')
    axisLine.setAttribute('stroke-width', 2)

    // Set interval for the small lines
    // Hard coded for now, make dynamic later.

    // TODO: Om highestvalue är 33 ska streck för 35 skrivas ut

    // If-sats på högsta värdet?
    // Om över 100, step = 10
    const step = 5

    for (let n = 0; n <= highestValue; n += step) {
      const y = svgHeight - margin - (n / highestValue) * (svgHeight - margin - topMargin)

      const minorLines = document.createElementNS('http://www.w3.org/2000/svg', 'line')

      minorLines.setAttribute('x1', 5)
      minorLines.setAttribute('y1', y)
      minorLines.setAttribute('x2', 15)
      minorLines.setAttribute('y2', y)
      minorLines.setAttribute('stroke', 'black')
      minorLines.setAttribute('stroke-width', 1)

      const minorLinesLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text')

      minorLinesLabel.setAttribute('x', 15)
      minorLinesLabel.setAttribute('y', y + 5)
      minorLinesLabel.textContent = n

      svg.appendChild(minorLines)
      svg.appendChild(minorLinesLabel)
    }
    svg.appendChild(axisLine)
  }
}
