class Controller {
    pin: PwmPin;

    constructor(pin: PwmPin) {
        this.pin = pin;
        this.init();
    }

    init(): void {}
}