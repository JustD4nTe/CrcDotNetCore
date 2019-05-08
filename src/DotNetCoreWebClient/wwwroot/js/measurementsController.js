class MeasurementsController {
    constructor() {
        this._newMeasurementSection = new NewMeasurementSection()
        this._measurementListSection = new MeasurementListSection()

        let _this = this

        this._newMeasurementSection.addEventListener(new class {
            newMeasurementAdded(e) {
                _this._measurementListSection.addNewMeasurement(e)
            }
        })
    }
}

(() => new MeasurementsController())()