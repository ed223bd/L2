// import { BarGraphManager } from "./js/BarGraphManager";
import { PieChartManager } from "./js/PieChartManager.js";

window.addEventListener('DOMContentLoaded', () => {
  // const barGraphManager = new BarGraphManager()
  const pieChartManager = new PieChartManager('pieChart', 450, 300)

  const data = [
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "40" },
  { label: "Karlstad", value: "12" },
  { label: "Luleå", value: "24" },
  { label: "Sundsvall", value: "30" },
  { label: "Karlstad", value: "12" },
  ]

  // TODO: Add barGraphManager 
  pieChartManager.createPieChart(data)
})