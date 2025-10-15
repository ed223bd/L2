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

    const highestValue = Math.max(...data.map(d => d.value))
    this.createAxis(highestValue)
  }

  // #drawLine ()

  // #drawValue ()
}
