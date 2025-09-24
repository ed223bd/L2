export class StatisticsManager {
  // Will validate data and split data into
  // attributes to build graphs from.

  // Validate based on the type of data for each graph?
  // Line graph: en label, FLERA values?
  // Bar & Pie: en label, ETT value

  // Validerar och returnerar data
  validateData (rawData) {
    if (!Array.isArray(rawData)) {
      throw new Error('Data must be an array')
    }

    rawData.forEach(d => {
      if (typeof d !== 'object' || d === null) {
        throw new Error('Data needs be sent as objects in an array and the object cannot be null')
      }

      if (typeof d.label !== 'string' || d.label.trim() === '') {
        throw new Error('Each label needs to be a string, that is not empty')
      }

      if (typeof d.value !== 'number') {
        throw new Error('Value needs to be a number')
      }
    })
    return rawData
  }
}
