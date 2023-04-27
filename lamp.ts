class Lamp {
    tick(): void {
        if (input.logoIsPressed()) {
            this.turn_off();
        } else {
            this.turn_on();
        }
    }

    turn_on(): void {
        pins.digitalWritePin(DigitalPin.P1, 1);
    }

    turn_off(): void {
        pins.digitalWritePin(DigitalPin.P1, 0);
    }
}