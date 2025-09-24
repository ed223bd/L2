export class BarGraphManager {
  #svg
  #svgWidth
  #svgHeight
  #margin
  #leftMargin
  #topMargin

  constructor (svgId, width, height) {
    this.#svg = document.querySelector(`#${svgId}`)
    this.#svgWidth = width
    this.#svgHeight = height
    // TODO: Hard coded for now
    this.#margin = 30
    this.#leftMargin = 50
    this.#topMargin = 70
  }

  createBarGraph (data) {
    const barWidth = Math.floor((this.#svgWidth - this.#leftMargin) / (data.length * 1.2))
    const highestValue = Math.max(...data.map(d => d.value))

    data.forEach((d, i) => {
      // TODO: remove. For debugging
      // console.log(d.label, d.value)
      const value = d.value
      const label = d.label

      const barHeight = (value / highestValue) * (this.#svgHeight - this.#margin - this.#topMargin)

      // 1.2 is padding between bars
      const x = this.#leftMargin + i * 1.2 * barWidth
      const y = (this.#svgHeight - barHeight - this.#margin)

      this.#createBar(x, y, barHeight, barWidth)

      this.#createLabel(x, y, barWidth, label)
    })
    this.#createAxis(highestValue)
  }

  #createBar (x, y, barHeight, barWidth) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    rect.setAttribute('x', x)
    rect.setAttribute('y', y)
    rect.setAttribute('height', barHeight)
    rect.setAttribute('width', barWidth)
    rect.setAttribute('fill', 'blue')
    rect.setAttribute('fill-opacity', 0.2)
    rect.setAttribute('stroke', 'black')

    this.#svg.appendChild(rect)
  }

  #createLabel (x, y, barWidth, label) {
    const xLabel = x + barWidth / 2
    const yLabel = this.#svgHeight - this.#margin / 2
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', xLabel)
    text.setAttribute('y', yLabel)
    text.setAttribute('text-anchor', 'middle')
    text.textContent = label

    // Add new element/s to SVG
    this.#svg.appendChild(text)
  }

  #createAxis (highestValue) {
    const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    axisLine.setAttribute('x1', 10)
    axisLine.setAttribute('x2', 10)
    axisLine.setAttribute('y1', 10)
    axisLine.setAttribute('y2', this.#svgHeight - this.#margin)
    axisLine.setAttribute('stroke', 'black')
    axisLine.setAttribute('stroke-width', 2)

    // TODO: Om highestvalue är 33 ska streck för 35 skrivas ut

    // If-sats på högsta värdet?
    // Om över 100, step = 10
    const step = 5

    for (let n = 0; n <= highestValue; n += step) {
      const y = this.#svgHeight - this.#margin - (n / highestValue) * (this.#svgHeight - this.#margin - this.#topMargin)

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

      this.#svg.appendChild(minorLines)
      this.#svg.appendChild(minorLinesLabel)
    }
    this.#svg.appendChild(axisLine)
  }
}
