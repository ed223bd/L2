import { BaseChart } from './BaseChart.js'

/**
 * Class that creates a Bar Graph diagram by looping through each data
 * object in an array and drawing to the SVG element.
 */
export class BarGraphManager extends BaseChart {
  /**
   * Sets the size of the bar graph SVG element for calculations.
   *
   * @param {string} svgId - The id for the SVG element for Bar Graph.
   * @param {number} width - The width to make calculations from.
   * @param {number} height - The height to make calculations from.
   */
  // TODO: remove? lint says unneccessary
  constructor (svgId, width, height) {
    super(svgId, width, height)
  }

  /**
   * Main method that makes calculations and calls on the drawing.
   *
   * @param {Array} data - The data array with objects.
   * @param {object} theme - The chosen theme with attributes.
   */
  createBarGraph (data, theme, fontSize) {
    // 1.2 is padding between bars
    const barWidth = Math.floor((this.svgWidth - this.leftMargin) / (data.length * 1.2))
    const highestValue = Math.max(...data.map(d => d.value))

    data.forEach((d, i) => {
      const value = d.value
      const label = d.label

      const barHeight = (value / highestValue) * (this.svgHeight - this.margin - this.topMargin)

      // 1.2 is padding between bars
      const x = this.leftMargin + i * 1.2 * barWidth
      const y = (this.svgHeight - barHeight - this.margin)

      this.#drawBar(x, y, barHeight, barWidth, theme)

      const xLabelPosition = x + barWidth / 2
      const yLabelPosition = this.svgHeight - this.margin / 2
      this.#drawLabel(xLabelPosition, yLabelPosition, label, theme, fontSize)

      // Value y-position is set a bit lower than label
      // to make it show on the bottom of the bars.
      const yValuePosition = yLabelPosition * 0.9
      this.#drawValue(xLabelPosition, yValuePosition, value, fontSize)
    })
    this.createAxis(highestValue, fontSize)
  }

  #drawBar (x, y, barHeight, barWidth, theme) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    rect.setAttribute('x', x)
    rect.setAttribute('y', y)
    rect.setAttribute('height', barHeight)
    rect.setAttribute('width', barWidth)
    rect.setAttribute('fill', theme.color)
    rect.setAttribute('fill-opacity', theme.colorOpacity)
    rect.setAttribute('stroke', theme.border)
    rect.setAttribute('stroke-width', theme.borderWidth)

    this.svg.appendChild(rect)
  }

  #drawLabel (xLabelPosition, yLabelPosition, label, theme, fontSize) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', xLabelPosition)
    text.setAttribute('y', yLabelPosition)
    text.setAttribute('text-anchor', 'middle')
    text.setAttribute('fill', theme.fontColor)
    text.setAttribute('font-family', theme.font)
    text.setAttribute('font-size', fontSize)

    text.textContent = label

    this.svg.appendChild(text)
  }

  #drawValue (xLabelPosition, yValuePosition, value, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', xLabelPosition)
    valueText.setAttribute('y', yValuePosition)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.setAttribute('font-size', fontSize)

    valueText.textContent = value

    this.svg.appendChild(valueText)
  }
}
