class SwitchButton {
    constructor(status,electricLamp) {
        this.status = status;
        this.electricLamp = electricLamp;
    }
    switchOnOff() {
        this.status =! this.status;
        this.electricLamp.turnOnOff();
    }
    setElectricLamp(newLamp){
        this.electricLamp = newLamp;
    }
}