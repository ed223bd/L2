import { BaseChart } from './BaseChart.js'

/**
 *
 */
export class LineGraphManager extends BaseChart {
  // TODO: remove? Unnecessary
  constructor (svgId, width, height) {
    super(svgId, width, height)
  }

  /**
   *
   */
  createLineGraph (data, theme) {
    // console.log(data)

    const spaceBetweenPoints = (this.svgWidth - this.margin) / data.length
    const highestValue = Math.max(...data.map(d => d.value))

    this.createAxis(highestValue)

    // let startingPointX = this.leftMargin

    for (let i = 0; i < data.length - 1; i++) {
      const value = data[i].value
      const label = data[i].label
      console.log(value, label)

      const heightOfPoint = Math.floor(value / highestValue * (this.svgHeight - this.topMargin - this.margin))
      const heightOfNextPoint = Math.floor(data[i + 1].value / highestValue * (this.svgHeight - this.topMargin - this.margin))

      let startingPointX = 0
      if (i === 0) {
        startingPointX = this.leftMargin
      } else {
        startingPointX += spaceBetweenPoints * i
      }
      console.log(startingPointX)

      const nextPointX = spaceBetweenPoints * (i + 1)

      const startingPointY = this.svgHeight - heightOfPoint - this.margin
      const nextPointY = this.svgHeight - heightOfNextPoint - this.margin

      // console.log(heightOfPoint)

      // console.log(startingPointX, startingPointY, spaceBetweenPoints, nextPointY)

      this.#drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme)
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

  // #drawValue ()
}
