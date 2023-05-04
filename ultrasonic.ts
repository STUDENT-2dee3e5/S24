let PIN_ULTRASONIC: Button = Button.B;

class UltrasonicController {
    handle: () => void;

    constructor(button: Button = PIN_ULTRASONIC) {
        input.onButtonPressed(button, (): void => this.handle());
    }

    tick(): void {
        /* Fake tick for later */
        return;
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