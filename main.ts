/* A: Enter
 * B: Exit
 */

enum Mode {
    DISPLAY = 0,
    ENTER = 1,
    EXIT = 2,
    STOP = 3,
}


class Portal {
    pin: AnalogInPin;

    constructor(pin: AnalogInPin) {
        this.pin = pin;
    }

    open(): void {
        this.pin.digitalWrite(true);
    }

    close(): void {
        this.pin.digitalWrite(false);
    }
}


class PortalApp {
    places_left: number;
    mode: Mode;
    portal: Portal;

    constructor() {
        this.places_left = 8;
        this.mode = Mode.DISPLAY;
        this.portal = new Portal(pins.P0);
    }

    main_loop(): void {
        try {
            if (this.mode == Mode.DISPLAY) {
                NUMBERS_IMAGES[this.places_left].showImage(0);
            } else if (this.mode == Mode.ENTER) {
                ICON_IMAGES[Icons.ARROW_IN].showImage(0);
            } else if (this.mode == Mode.EXIT) {
                ICON_IMAGES[Icons.ARROW_OUT].showImage(0);
            } else if (this.mode == Mode.STOP) {
                ICON_IMAGES[Icons.STOP].showImage(0);
            }
        } catch (exception) {
            serial.writeLine(exception);
            this.reset();
        }
    }

    init(): void {
        basic.clearScreen();
        input.onButtonPressed(Button.A, (): void => this.enter());
        input.onButtonPressed(Button.B, (): void => this.exit());
    }

    reset(): void {
        this.places_left = 8;
        this.mode = Mode.DISPLAY;
    }

    enter(): void {
        if (this.places_left > 0) {
            this.places_left -= 1;
            this.mode = Mode.ENTER;
            this.portal.open();
        } else {
            this.mode = Mode.STOP;
        }
        this.wait();
    }

    exit(): void {
        this.places_left += 1;
        this.mode = Mode.EXIT;
        this.portal.open();
        this.wait();
    }

    wait(): void {
        control.waitMicros(3000000);
        this.portal.close();
        this.mode = Mode.DISPLAY;
    }
}

function main(): void {
    let application: PortalApp = new PortalApp();

    application.init();
    basic.forever((): void => application.main_loop());
}

main();