/**
 * Class that creates a Bar Graph diagram by looping through each data
 * object in an array and drawing to the SVG element.
 */
export class BarGraphManager {
  #svg
  #svgWidth
  #svgHeight
  #margin
  #leftMargin
  #topMargin

  /**
   * Sets the size of the bar graph SVG element for calculations.
   *
   * @param {string} svgId - The id for the SVG element for Bar Graph.
   * @param {number} width - The width to make calculations from.
   * @param {number} height - The height to make calculations from.
   */
  constructor (svgId, width, height) {
    this.#svg = document.querySelector(`#${svgId}`)
    this.#svgWidth = width
    this.#svgHeight = height
    // TODO: Hard coded for now
    this.#margin = this.#svgWidth * 0.1
    this.#leftMargin = this.#svgWidth * 0.12
    this.#topMargin = this.#svgWidth * 0.14
  }

  /**
   * Main method that makes calculations and calls on the drawing.
   *
   * @param {Array} data - The data array with objects.
   */
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

      this.#drawBar(x, y, barHeight, barWidth)

      const xLabelPosition = x + barWidth / 2
      const yLabelPosition = this.#svgHeight - this.#margin / 2
      this.#drawLabel(xLabelPosition, yLabelPosition, label)

      const yValuePosition = yLabelPosition * 0.9
      this.#drawValue(xLabelPosition, yValuePosition, value)
    })
    this.#createAxis(highestValue)
  }

  #drawBar (x, y, barHeight, barWidth) {
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

  #drawLabel (xLabelPosition, yLabelPosition, label) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', xLabelPosition)
    text.setAttribute('y', yLabelPosition)
    text.setAttribute('text-anchor', 'middle')
    text.textContent = label

    // Add new element/s to SVG
    this.#svg.appendChild(text)
  }

  #drawValue (xLabelPosition, yValuePosition, value) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', xLabelPosition)
    valueText.setAttribute('y', yValuePosition)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.textContent = value

    this.#svg.appendChild(valueText)
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
