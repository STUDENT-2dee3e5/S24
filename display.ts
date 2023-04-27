class Display {
    turn_on(): void {
        pins.digitalWritePin(DigitalPin.P1, 1);
    }

    turn_off(): void {
        pins.digitalWritePin(DigitalPin.P1, 0);
    }
}