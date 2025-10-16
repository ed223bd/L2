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

    const spaceBetweenPoints = this.svgWidth - this.margin / data.length
    const highestValue = Math.max(...data.map(d => d.value))
    this.createAxis(highestValue)

    // For-loop
    // för varje data-entry ska den öka med 100 (sen dynamiskt)
    let currentPoint = this.leftMargin
    for (let i = 0; i < data.length; i++) {
      console.log(i)
      currentPoint += 100

      data.forEach(d => {
      this.#drawLine(currentPoint, spaceBetweenPoints, theme)
    })
    }
  }

  #drawLine(currentPoint, spaceBetweenPoints, theme) {

    // path eller flera line?
    // Path: M(moveto), L(lineto), Z(close)

    // Samma "hopp" på x-axeln (spaceBetweenPoints)
    // Två y-värden per streck (start och slut)
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute('d', `
      M ${currentPoint} 150
      L ${spaceBetweenPoints} 195
    `)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', theme.color)
    path.setAttribute('stroke-opacity', theme.colorOpacity)
    path.setAttribute('stroke-width', '4')

    this.svg.appendChild(path)
  }

  // #drawValue ()
}
