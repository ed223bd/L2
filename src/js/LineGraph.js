import { BaseChart } from './BaseChart.js'

/**
 * Class that creates a Line Graph diagram by looping through each data
 * object in an array and drawing to the SVG element.
 */
export class LineGraph extends BaseChart {
  // TODO: remove? Unnecessary
  constructor (svgId, width, height) {
    super(svgId, width, height)
  }

  /**
   *
   */
  createLineGraph (data, theme, fontSize) {
    // console.log(data)

    const spaceBetweenPoints = (this.svgWidth - this.margin) / data.length
    const highestValue = Math.max(...data.map(d => d.value))

    this.createAxis(highestValue, theme, fontSize)

    // let startingPointX = this.leftMargin

    let startingPointX = 0

    for (let i = 0; i < data.length; i++) {
      const value = data[i].value
      const label = data[i].label
      // console.log(value, label)

      const heightOfPoint = Math.floor(value / highestValue * (this.svgHeight - this.topMargin - this.margin))

      let heightOfNextPoint
      if (i === data.length - 1) {
        // To make the last line into just a point
        heightOfNextPoint = heightOfPoint
      } else {
        heightOfNextPoint = Math.floor(data[i + 1].value / highestValue * (this.svgHeight - this.topMargin - this.margin))
      }

      if (i === 0) {
        startingPointX += this.leftMargin
      } else if (i === data.length) {
        startingPointX += 0
      } else {
        startingPointX += spaceBetweenPoints
      }

      let nextPointX
      if (i === data.length - 1) {
        nextPointX = startingPointX
      } else {
        nextPointX = startingPointX + spaceBetweenPoints
      }

      const startingPointY = this.svgHeight - heightOfPoint - this.margin
      const nextPointY = this.svgHeight - heightOfNextPoint - this.margin

      // console.log(heightOfPoint)

      // console.log(startingPointX, startingPointY, spaceBetweenPoints, nextPointY)

      const labelHeight = this.svgHeight - this.margin / 2

      this.#drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme)
      this.#drawValue(startingPointX, startingPointY, value, theme, fontSize)
      this.#drawLabel(startingPointX, labelHeight, label, theme, fontSize)
    }
  }

  #drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme) {

    // path eller flera line?
    // Path: M(moveto), L(lineto), Z(close)

    // Samma "hopp" på x-axeln (spaceBetweenPoints)
    // Två y-värden per streck (start och slut)
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute('d', `
      M ${startingPointX} ${startingPointY}
      L ${nextPointX} ${nextPointY}
    `)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', theme.color)
    path.setAttribute('stroke-opacity', theme.colorOpacity)
    path.setAttribute('stroke-width', '4')

    this.svg.appendChild(path)
  }

  #drawValue (startingPointX, startingPointY, value, theme, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', startingPointX)
    valueText.setAttribute('y', startingPointY)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.setAttribute('font-family', theme.font)
    valueText.setAttribute('font-size', fontSize)
    valueText.textContent = value

    this.svg.appendChild(valueText)
  }

  #drawLabel (startingPointX, labelHeight, label, theme, fontSize) {
    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    labelText.setAttribute('x', startingPointX)
    labelText.setAttribute('y', labelHeight)
    labelText.setAttribute('text-anchor', 'middle')
    labelText.setAttribute('font-family', theme.font)
    labelText.setAttribute('font-size', fontSize)
    labelText.textContent = label

    this.svg.appendChild(labelText)
  }
}
