/**
 *
 */
export class BaseChart {
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
    this.#margin = this.#svgWidth * 0.1
    this.#leftMargin = this.#svgWidth * 0.12
    this.#topMargin = this.#svgWidth * 0.14
  }

  get svg () {
    return this.#svg
  }

  get svgWidth () {
    return this.#svgWidth
  }

  get svgHeight () {
    return this.#svgHeight
  }

  get margin () {
    return this.#margin
  }

  get leftMargin () {
    return this.#leftMargin
  }

  get topMargin () {
    return this.#topMargin
  }

  createAxis (highestValue) {
    this.#drawMainAxisLine()

    const step = this.#assignStepValue()

    for (let i = 0; i <= highestValue; i += step) {
      const y = this.svgHeight - this.margin - (i / highestValue) * (this.svgHeight - this.margin - this.topMargin)

      this.#drawMinorAxisLines(y, i)
    }
  }

  #assignStepValue (highestValue) {
    let step
    if (highestValue <= 10) {
      step = 1
    } else if (highestValue > 10 && highestValue <= 100) {
      step = 5
    } else {
      step = 10
    }
    return step
  }

  #drawMainAxisLine () {
    const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    axisLine.setAttribute('x1', 10)
    axisLine.setAttribute('x2', 10)
    axisLine.setAttribute('y1', 10)
    axisLine.setAttribute('y2', this.svgHeight - this.margin)
    axisLine.setAttribute('stroke', 'black')
    axisLine.setAttribute('stroke-width', 2)

    this.svg.appendChild(axisLine)
  }

  #drawMinorAxisLines (y, i) {
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
    minorLinesLabel.textContent = i

    this.svg.appendChild(minorLines)
    this.svg.appendChild(minorLinesLabel)
  }
}
