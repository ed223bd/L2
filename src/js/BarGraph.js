import { BaseChart } from './BaseChart.js'

export class BarGraph extends BaseChart {
  constructor (svgId, width, height) {
    super(svgId, width, height)
  }

  createBarGraph (data, theme, fontSize) {
    const barPadding = 1.2
    const totalWidth = this.svgWidth - this.leftMargin
    const availableHeight = this.svgHeight - this.margin - this.topMargin
    const barWidth = Math.floor(totalWidth / (data.length * barPadding))
    const highestValue = Math.max(...data.map(d => d.value))

    data.forEach((d, i) => {
      const value = d.value
      const label = d.label

      const barHeight = (value / highestValue) * (availableHeight)

      const x = this.leftMargin + i * barPadding * barWidth
      const y = (this.svgHeight - barHeight - this.margin)
      const rect = this.#drawBar(x, y, barHeight, barWidth, theme)

      const xLabelPosition = x + barWidth / 2
      const yLabelPosition = this.svgHeight - this.margin / 2
      const text = this.#drawLabel(xLabelPosition, yLabelPosition, label, theme, fontSize)

      const yValuePosition = this.svgHeight - barHeight - this.margin * barPadding
      const valueText = this.#drawValue(xLabelPosition, yValuePosition, value, theme, fontSize)

      this.#appendElements(rect, text, valueText)
    })
    this.createAxis(highestValue, theme, fontSize)
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

    return rect
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

    return text
  }

  #drawValue (xLabelPosition, yValuePosition, value, theme, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', xLabelPosition)
    valueText.setAttribute('y', yValuePosition)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.setAttribute('font-family', theme.font)
    valueText.setAttribute('font-size', fontSize)

    valueText.textContent = value

    return valueText
  }

  #appendElements (rect, text, valueText ) {
    this.svg.appendChild(rect)
    this.svg.appendChild(text)
    this.svg.appendChild(valueText)
  }
}
