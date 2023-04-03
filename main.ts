/* A: Enter
 * B: Exit
 */

enum Mode {
    DISPLAY = 0,
    ARROW = 1,
    STOP = 2,
}


class PortalApp {
    places_left: number;
    mode: Mode;

    constructor() {
        this.places_left = 8;
        this.mode = Mode.DISPLAY;
    }

    main_loop() {
        if (this.mode == Mode.DISPLAY) {
            NUMBERS_IMAGES[this.places_left].showImage(0);
        } else if (this.mode == Mode.ARROW) {
            ICON_IMAGES[Icons.ARROW].showImage(0);
        } else if (this.mode == Mode.STOP) {
            ICON_IMAGES[Icons.STOP].showImage(0);
        }
    }

    init() {
        basic.clearScreen();
        input.onButtonPressed(Button.A, (): void => this.enter());
    }

    enter() {
        if (this.places_left > 0) {
            this.places_left -= 1;
            this.mode = Mode.ARROW;
        } else {
            this.mode = Mode.STOP;
        }
        control.waitMicros(3000000);
        this.mode = Mode.DISPLAY;
    }
}

function main(): void {
    let application: PortalApp = new PortalApp();

    application.init();
    basic.forever((): void => application.main_loop());
}

main();