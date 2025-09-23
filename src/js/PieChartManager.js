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

      const x1 = xMiddle + radius * Math.cos(startAngle)
      const y1 = yMiddle + radius * Math.sin(startAngle)
      const x2 = xMiddle + radius * Math.cos(startAngle + sliceAngle)
      const y2 = yMiddle + radius * Math.sin(startAngle + sliceAngle)

      startAngle += sliceAngle

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
        L ${x1} ${y1}
        A ${radius} ${radius} 0 0 1 ${x2} ${y2}
        Z 
      `
      )

      path.setAttribute('fill', 'green')
      path.setAttribute('fill-opacity', 0.5)
      path.setAttribute('stroke', 'black')
      path.setAttribute('stroke-width', 2)
      svg.appendChild(path)



      // For labels, use cos and sin to aim for middle of arch
    })
  }
}

const pieChartManager = new PieChartManager()
const data = [
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
]
pieChartManager.createPieChart(data)