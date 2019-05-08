class MeasurementsController {
    _service = null

    constructor() {
        this._service = new MeasurementService("https://localhost:44354/")

        this._newMeasurementSection = new NewMeasurementSection()
        this._measurementListSection = new MeasurementListSection()

        let _this = this

        this._newMeasurementSection.addEventListener(new class {
            newMeasurementAdded(e) {
                _this._measurementListSection.addNewMeasurement(e)
            }
        })

        this._service.addEventListener(new class {
            getResponseReady(e) {
                JSON.parse(e.data).forEach(i => {
                    _this._measurementListSection.addNewMeasurement({
                        name: i.name,
                        value: i.value
                    })
                })
            }
        })

        this._service.get()
    }
}

(() => new MeasurementsController())()