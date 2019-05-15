class MeasurementsController {
    _service = null

    constructor() {
        this._service = new MeasurementService("https://localhost:44354/")

        this._newMeasurementSection = new NewMeasurementSection()
        this._measurementListSection = new MeasurementListSection()

        let _this = this

        this._newMeasurementSection.addEventListener(new class {
            newMeasurementAdded(e) {
                let data = e
                data.createdBy = "Operator"
                data.createdAt = "2019-05-08T00:00:00"
                _this._service.post(data)
            }
        })

        this._service.addEventListener(new class {
            getResponseReady(e) {
                JSON.parse(e.data).forEach(i => {
                    _this._measurementListSection.addNewMeasurement({
                        id:  i.id,
                        name: i.name,
                        value: i.value,
                        createdBy: i.createdBy
                    })
                })
            }

            postResponseReady(e) {
                _this._measurementListSection.addNewMeasurement(JSON.parse(e.data))
            }
        })



        this._service.get()
    }
}

(() => new MeasurementsController())()