export class PieChartManager {
  #svg
  #svgWidth
  #svgHeight
  #radius

  constructor(svgId, width, height) {
    this.#svg = document.querySelector(`#${svgId}`)
    this.#svgWidth = width
    this.#svgHeight = height
    this.#radius = this.#svgHeight / 3 
  }

  /**
   * Public method that is the starting point for drawing the pie chart.
   * 
   * @param {Array} data - An array of objects, set in the app.
   */
  createPieChart(data) {
    let sum = 0
    data.forEach(d => {
      sum += parseInt(d.value)
    });
    console.log(sum)

    let startAngle = 0

    const xMiddle = this.#svgWidth / 2
    const yMiddle = this.#svgHeight / 2

    data.forEach(d => {
      const label = d.label
      const slice = d.value / sum
      // console.log(slice)

      const sliceAngle = slice * 2 * Math.PI
      console.log(sliceAngle)

      // Calls on private method to do the drawing
      this.#createSlice(xMiddle, yMiddle, startAngle, sliceAngle)

      // Calls on private method to do the drawing
      this.#createLabel(xMiddle, yMiddle, startAngle, sliceAngle, label)

      // When slice and label has been created, update starting position for next slice
      startAngle += sliceAngle
    })
  }

  #createSlice(xMiddle, yMiddle, startAngle, sliceAngle) {
    const xStart = xMiddle + this.#radius * Math.cos(startAngle)
    const yStart = yMiddle + this.#radius * Math.sin(startAngle)
    const xEnd = xMiddle + this.#radius * Math.cos(startAngle + sliceAngle)
    const yEnd = yMiddle + this.#radius * Math.sin(startAngle + sliceAngle)

    let largeArcFlag
    if (sliceAngle > Math.PI) {
      largeArcFlag = 1
    } else {
      largeArcFlag = 0
    }

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    // TODO: remove. Hard coded for static graphics
    // path.setAttribute('d', `
    //   M 100 100
    //   L 150 100
    //   A radius radius 0 0 1 100 150
    //   Z
    // `)
    path.setAttribute('d', `
      M ${xMiddle} ${yMiddle}
      L ${xStart} ${yStart}
      A ${this.#radius} ${this.#radius} 0 ${largeArcFlag} 1 ${xEnd} ${yEnd}
      Z 
    `
    )

    path.setAttribute('fill', 'green')
    path.setAttribute('fill-opacity', 0.5)
    path.setAttribute('stroke', 'black')
    path.setAttribute('stroke-width', 2)
    this.#svg.appendChild(path)
  }

  #createLabel(xMiddle, yMiddle, startAngle, sliceAngle, label) {

    const middleAngle = startAngle + sliceAngle / 2

    const xLabel = xMiddle + this.#radius * 1.2 * Math.cos(middleAngle)
    const yLabel = yMiddle + this.#radius * 1.2 * Math.sin(middleAngle)


    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    if (Math.cos(middleAngle) > 0) {
      text.setAttribute('text-anchor', 'start')
    } else {
      text.setAttribute('text-anchor', 'end')
    }
    text.setAttribute('x', xLabel)
    text.setAttribute('y', yLabel)
    text.textContent = label

    this.#svg.appendChild(text)
  }
}
