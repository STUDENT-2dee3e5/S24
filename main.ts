class App {
    gate: GateController;
    lamp: LampController;
    button: ButtonController;
    ultrasonic: UltrasonicController;

    display: Display;
    mode: Mode;

    places_left: number;
    reset_at: number;
    warning: boolean;

    constructor() {
        this.gate = new GateController(PIN_SERVO);
        this.lamp = new LampController(PIN_LAMP);
        this.button = new ButtonController(BUTTON);
        this.ultrasonic = new UltrasonicController(PIN_ULTRASONIC);

        this.display = new Display();
        this.mode = Mode.display;

        this.places_left = 8;
        this.reset_at = Infinity;
        this.warning = false;
    }

    init(): void {
        this.button.setHandle((): void => this.button_pressed());
        this.ultrasonic.setHandle((): void => this.ultrasonic_signal());
    }

    main_loop(): void {
        if (this.places_left > 8) {
            /* WAT */
            basic.showIcon(IconNames.No, 600);
        } else {
            this.warning = false;
        }
        this.lamp.tick();
        this.ultrasonic.tick();
        if (this.mode == Mode.display) {
            this.display.display(this.places_left);
        } else {
            this.display.display_mode(this.mode);
        }
        if (input.runningTime() > this.reset_at) {
            this.mode = Mode.display;
            this.reset_at = Infinity;
            this.gate.close();
        }
    }

    button_pressed(): void {
        if (this.mode != Mode.display) {
            return;
        }
        if (this.places_left > 0) {
            this.mode = Mode.enter;
            this.places_left -= 1;
            this.gate.open();
        } else {
            this.mode = Mode.no_places_left;
        }
        this.reset_at = input.runningTime() + DELAY;
    }

    ultrasonic_signal(): void {
        if (this.mode != Mode.display) {
            return;
        }
        this.mode = Mode.leave;
        this.places_left += 1;
        this.gate.open();
        this.reset_at = input.runningTime() + DELAY;
    }
}


function main(): void {
    let app: App = new App();

    app.init();
    basic.forever((): void => app.main_loop());
    loops.everyInterval
}

main();