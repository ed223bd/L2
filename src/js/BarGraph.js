import { BaseChart } from './BaseChart.js'

export class BarGraph extends BaseChart {
  createBarGraph (data, theme, fontSize) {
    const metrics = {
      barPadding: 1.2,
      totalWidth: this.svgWidth - this.leftMargin,
      availableHeight: this.svgHeight - this.margin - this.topMargin,
      barWidth: null,
      highestValue: Math.max(...data.map(d => d.value))
    }

    metrics.barWidth = Math.floor(metrics.totalWidth / (data.length * metrics.barPadding))

    data.forEach((d, i) => {
      const value = d.value
      const label = d.label

      const barHeight = (value / metrics.highestValue) * (metrics.availableHeight)

      const x = this.leftMargin + i * metrics.barPadding * metrics.barWidth
      const y = (this.svgHeight - barHeight - this.margin)
      const rect = this.#drawBar(x, y, barHeight, metrics.barWidth, theme)

      const labelPosition = {
        xLabelPosition: x + metrics.barWidth / 2,
        yLabelPosition: this.svgHeight - this.margin / 2
      }
      const text = this.#drawLabel(labelPosition, label, theme, fontSize)

      const yValuePosition = this.svgHeight - barHeight - this.margin * metrics.barPadding
      const valueText = this.#drawValue(labelPosition, yValuePosition, value, theme, fontSize)

      this.#appendElements(rect, text, valueText)
    })
    this.createAxis(metrics.highestValue, theme, fontSize)
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

  #drawLabel (labelPosition, label, theme, fontSize) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    text.setAttribute('x', labelPosition.xLabelPosition)
    text.setAttribute('y', labelPosition.yLabelPosition)
    text.setAttribute('text-anchor', 'middle')
    text.setAttribute('fill', theme.fontColor)
    text.setAttribute('font-family', theme.font)
    text.setAttribute('font-size', fontSize)

    text.textContent = label

    return text
  }

  #drawValue (labelPosition, yValuePosition, value, theme, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', labelPosition.xLabelPosition)
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
