import { BaseChart } from './BaseChart.js'

export class LineGraph extends BaseChart {
  constructor (svgId, width, height) {
    super(svgId, width, height)
  }

  createLineGraph (data, theme, fontSize) {
    if (!data || data.length === 0) {
      throw new Error('Data needs to be a non-empty array')
    }

    const labelHeight = this.svgHeight - this.margin / 2
    const availableHeight = this.svgHeight - this.topMargin - this.margin
    const spaceBetweenPoints = (this.svgWidth - this.margin) / data.length
    const highestValue = Math.max(...data.map(d => d.value))

    this.createAxis(highestValue, theme, fontSize)

    let startingPointX = 0

    for (let i = 0; i < data.length; i++) {
      const value = data[i].value
      const label = data[i].label

      const heightOfPoint = Math.floor(value / this.highestValue * (this.availableHeight))

      startingPointX = this.#calculateStartingPointX(i, data, startingPointX)
      const nextPointX = this.#calculateNextPointX(i, data, startingPointX)
      const heightOfNextPoint = this.#calculateHeightOfNextPoint(i, data, heightOfPoint)

      const startingPointY = this.svgHeight - heightOfPoint - this.margin
      const nextPointY = this.svgHeight - heightOfNextPoint - this.margin

      const path = this.#drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme)
      const valueText = this.#drawValue(startingPointX, startingPointY, value, theme, fontSize)
      const labelText = this.#drawLabel(startingPointX, label, theme, fontSize)

      this.#appendElements(path, valueText, labelText)
    }
  }

  #calculateStartingPointX(i, data, startingPointX) {
    if (i === 0) {
      startingPointX += this.leftMargin
    } else if (i === data.length) {
      startingPointX += 0
    } else {
      startingPointX += this.spaceBetweenPoints
    }

    return startingPointX
  }

  #calculateNextPointX(i, data, startingPointX) {
    let nextPointX
    if (i === data.length - 1) {
      nextPointX = startingPointX
    } else {
      nextPointX = startingPointX + this.spaceBetweenPoints
    }

    return nextPointX
  }

  #calculateHeightOfNextPoint (i, data, heightOfPoint) {
    let heightOfNextPoint
    if (i === data.length - 1) {
      // Makes the last line into just a point
      heightOfNextPoint = heightOfPoint
    } else {
      heightOfNextPoint = Math.floor(data[i + 1].value / this.highestValue * (this.availableHeight))
    }

    return heightOfNextPoint
  }

  #drawLine (startingPointX, startingPointY, nextPointX, nextPointY, theme) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute('d', `
      M ${startingPointX} ${startingPointY}
      L ${nextPointX} ${nextPointY}
    `)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', theme.color)
    path.setAttribute('stroke-opacity', theme.colorOpacity)
    path.setAttribute('stroke-width', '4')

    return path
  }

  #drawValue (startingPointX, startingPointY, value, theme, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', startingPointX)
    valueText.setAttribute('y', startingPointY)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.setAttribute('font-family', theme.font)
    valueText.setAttribute('font-size', fontSize)
    valueText.textContent = value

    return valueText
  }

  #drawLabel (startingPointX, label, theme, fontSize) {
    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    labelText.setAttribute('x', startingPointX)
    labelText.setAttribute('y', this.labelHeight)
    labelText.setAttribute('text-anchor', 'middle')
    labelText.setAttribute('font-family', theme.font)
    labelText.setAttribute('font-size', fontSize)
    labelText.textContent = label

    return labelText
  }

  #appendElements (path, valueText, labelText) {
    this.svg.appendChild(labelText)
    this.svg.appendChild(valueText)
    this.svg.appendChild(path)
  }
}
