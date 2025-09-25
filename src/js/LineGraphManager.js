export class LineGraphManager {
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

  createLineGraph(lineGraphData) {
    // const spaceBetweenValues

    lineGraphData.forEach(d => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')

      line.setAttribute('x1', 30)
      line.setAttribute('y1', 30)
      line.setAttribute('x2', 100)
      line.setAttribute('y2', 100)
      line.setAttribute('stroke', 'black')

      this.#svg.appendChild(line)
    })
    // Väldigt likt bar graph??
    // Line to istället för rektanglar, annars väldigt lika?

    // Olika färger på för olika "labels"?
    // Hur sätter man en ny färg per label?
  }
}
