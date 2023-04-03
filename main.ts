/* A: Enter
 * B: Exit
 */


class PortalApp {
    places_left: number;

    constructor() {
        this.places_left = 8;
    }

    main_loop() {
        NUMBERS_IMAGES[this.places_left].showImage(0);

        if (input.buttonIsPressed(Button.A)) {
            self.enter();
        }
    }

    init() {
        basic.clearScreen();
    }

    enter() {
        if (this.places_left > 0) {

        } else {
            ICON_IMAGES[]
        }
    }
}

function main(): void {
    let application: PortalApp = new PortalApp();

    application.init();
    basic.forever((): void => application.main_loop());
}

main();