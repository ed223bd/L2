export class PieChartManager {
  createPieChart(data) {
    const svg = document.querySelector('#pieChart')

    const svgWidth = 450
    const svgHeight = 300

    let sum = 0
    data.forEach(d => {
      sum += parseInt(d.value)
    });
    console.log(sum)

    let startAngle = 0
    const radius = 110

    data.forEach(d => {
      const slice = d.value / sum
      // console.log(slice)

      const sliceAngle = slice * 2 * Math.PI
      console.log(sliceAngle)

      const xMiddle = svgWidth / 2
      const yMiddle = svgHeight / 2

      const xStart = xMiddle + radius * Math.cos(startAngle)
      const yStart = yMiddle + radius * Math.sin(startAngle)
      const xEnd = xMiddle + radius * Math.cos(startAngle + sliceAngle)
      const yEnd = yMiddle + radius * Math.sin(startAngle + sliceAngle)

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
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${xEnd} ${yEnd}
        Z 
      `
      )

      path.setAttribute('fill', 'green')
      path.setAttribute('fill-opacity', 0.5)
      path.setAttribute('stroke', 'black')
      path.setAttribute('stroke-width', 2)
      svg.appendChild(path)

      // Dela upp i create bars 
      // Nedan ska vara i create labels

      const middleAngle = startAngle + sliceAngle / 2

      const xLabel = xMiddle + radius * 1.2 * Math.cos(middleAngle)
      const yLabel = yMiddle + radius * 1.2 * Math.sin(middleAngle)


      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')

      if (Math.cos(middleAngle) > 0) {
        text.setAttribute('text-anchor', 'start')
      } else {
        text.setAttribute('text-anchor', 'end')
      }
      text.setAttribute('x', xLabel)
      text.setAttribute('y', yLabel)
      text.textContent = d.label

      svg.appendChild(text)

      startAngle += sliceAngle

    })
  }
}

const pieChartManager = new PieChartManager()
const data = [
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "40" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
]
pieChartManager.createPieChart(data)