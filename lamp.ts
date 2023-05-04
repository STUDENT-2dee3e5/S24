let PIN_LAMP: PwmPin = pins.P1;


class LampController extends Controller {
    constructor(pin: PwmPin = PIN_LAMP) {
        super(pin);

        this.turn_off();
    }

    tick(): void {
        if (this.get_luminosity() > DAY_THRESHOLD) {
            this.turn_off();
        } else {
            this.turn_on();
        }
    }

    get_luminosity(): number {
        return input.lightLevel();
    }

    turn_on(): void {
        this.pin.digitalWrite(true);
    }

    turn_off(): void {
        this.pin.digitalWrite(false);
    }
}