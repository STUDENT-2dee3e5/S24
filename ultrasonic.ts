let PIN_ULTRASONIC: DigitalPin = DigitalPin.P2;

class UltrasonicController {
    handle: () => void;
    pin: DigitalPin;

    constructor(pin: DigitalPin = PIN_ULTRASONIC) {
        input.onButtonPressed(Button.B, (): void => this.handle());
        this.pin = pin;
    }

    tick(): void {
        /* Fake tick for later */
        if (grove.measureInCentimeters(this.pin as DigitalPin) < DISTANCE_THRESHOLD) {
            this.handle();
        }
    }

    setHandle(handle: () => void) {
        this.handle = handle;
    }
}
/*
let PIN_ULTRASONIC: PwmPin = pins.P2;
let DISTANCE_THRESHOLD: number = 100;


class UltrasonicSensor {
    pin: PwmPin;
    handle: (state: boolean) => void;

    constructor(pin: PwmPin = PIN_ULTRASONIC) {
        this.pin = pin;
        this.handle = (state: boolean): void => null;
    }

    main_loop(): void {

    }

    get_distance(): number {
        // TODO: Implement it
        return 100;
    }

    set_handle(handle: (state: boolean) => void): void {
        this.handle = handle;
    }
}
*/