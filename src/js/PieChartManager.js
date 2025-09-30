export class PieChartManager {
  #svg
  #svgWidth
  #svgHeight
  #radius

  constructor (svgId, width, height) {
    this.#svg = document.querySelector(`#${svgId}`)
    this.#svgWidth = width
    this.#svgHeight = height
    this.#radius = this.#svgHeight / 3
  }

  /**
   * Public method that is the starting point for drawing the pie chart.
   *
   * @param {Array} data - An array of objects, set in the app.
   * @param {object} theme - The set theme from the app.
   */
  createPieChart (data, theme) {
    let startAngle = 0

    const xMiddle = this.#svgWidth / 2
    const yMiddle = this.#svgHeight / 2

    let sum = 0
    data.forEach(d => {
      sum += parseInt(d.value)
    })
    // console.log(sum)

    // If there is only one data object, only draw a circle and print values.
    if (data.length === 1) {
      data.forEach(d => {
        const label = d.label
        const value = d.value
        this.#drawCircle(xMiddle, yMiddle, label, value, theme)
      })
    } else {
      data.forEach(d => {
        const label = d.label
        const value = d.value
        const slice = value / sum
        const slicePercentage = Math.round(slice * 100)
        // console.log(slice)

        const sliceAngle = slice * 2 * Math.PI
        // console.log(sliceAngle)

        // Calls on private method to do the drawing
        this.#createSlice(xMiddle, yMiddle, startAngle, sliceAngle, theme)

        // Calls on private method to do the drawing
        const middleAngle = startAngle + sliceAngle / 2

        const xLabel = xMiddle + this.#radius * 1.2 * Math.cos(middleAngle)
        const yLabel = yMiddle + this.#radius * 1.2 * Math.sin(middleAngle)
        this.#createLabel(middleAngle, xLabel, yLabel, label, slicePercentage, theme)

        // When slice and label has been created, update starting position for next slice
        startAngle += sliceAngle
      })
    }
  }

  #createSlice (xMiddle, yMiddle, startAngle, sliceAngle, theme) {
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

    path.setAttribute('fill', theme.color)
    path.setAttribute('fill-opacity', theme.colorOpacity)
    path.setAttribute('stroke', theme.border)
    path.setAttribute('stroke-width', theme.borderWidth)
    this.#svg.appendChild(path)
  }

  #createLabel (middleAngle, xLabel, yLabel, label, slicePercentage, theme) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    if (Math.cos(middleAngle) > 0) {
      text.setAttribute('text-anchor', 'start')
    } else {
      text.setAttribute('text-anchor', 'end')
    }
    text.setAttribute('x', xLabel)
    text.setAttribute('y', yLabel)
    text.setAttribute('font-family', theme.font)
    text.setAttribute('fill', theme.fontColor)

    text.textContent = label + ', ' + slicePercentage + '%'

    this.#svg.appendChild(text)
  }

  #drawCircle (xMiddle, yMiddle, label, value, theme) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    circle.setAttribute('r', this.#radius)
    circle.setAttribute('cx', xMiddle)
    circle.setAttribute('cy', yMiddle)
    circle.setAttribute('fill', theme.color)
    circle.setAttribute('fill-opacity', theme.colorOpacity)
    circle.setAttribute('stroke', theme.border)
    circle.setAttribute('stroke-width', theme.borderWidth)

    this.#svg.appendChild(circle)
    this.#drawCircleValue(xMiddle, yMiddle, label, theme)
  }

  #drawCircleValue (xMiddle, yMiddle, label, theme) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', xMiddle)
    text.setAttribute('y', yMiddle)
    text.setAttribute('fill', theme.fontColor)
    text.setAttribute('text-anchor', 'middle')
    text.setAttribute('font-family', theme.font)

    text.textContent = label + ', ' + '100%'

    this.#svg.appendChild(text)
  }
}
