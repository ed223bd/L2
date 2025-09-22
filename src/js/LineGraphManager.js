export class LineGraphManager {

  createLineGraph(data) {
    const svg = document.querySelector('#lineChart')

    // Väldigt likt bar graph??
    // Line to istället för rektanglar, annars väldigt lika?
    // Olika färger på för olika "labels"? 
    // Hur sätter man en ny färg per label?


  }
}

const lineGraphManager = new LineGraphManager()
const data = [
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
]
lineGraphManager.createLineGraph(data)