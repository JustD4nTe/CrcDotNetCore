class MeasurementListSection {
    addNewMeasurement(measurement) {
        let grid = document.querySelector('#measurement_container')
        let newRow = grid.children[1].cloneNode(true)

        let idColumn = newRow.querySelector('div[data-column-type=\'id\']')
        let nameColumn = newRow.querySelector('div[data-column-type=\'name\']')
        let valueColumn = newRow.querySelector('div[data-column-type=\'value\']')
        let createdByColumn = newRow.querySelector('div[data-column-type=\'createdBy\']')

        nameColumn.innerHTML = measurement.name
        valueColumn.innerHTML = measurement.value

        newRow.classList.remove('d-none')
        grid.appendChild(newRow)
    }
}