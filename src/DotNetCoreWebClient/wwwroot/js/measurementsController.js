class MeasurementsController {
    contructor() {
        this._newMeasurementSection = new NewMeasurementSection()
        this._newMeasurementSection.addEventListener(new class {
            newMeasurementAdded(e) {
                debugger
            }
        });
    }
}

(() => new MeasurementsController())()