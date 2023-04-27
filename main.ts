class Main {
    gate: Gate;
    lamp: Lamp;
    places_left: number;

    constructor() {
        this.gate = new Gate();
        this.lamp = new Lamp();
        this.places_left = 8;
    }

    init(): void {
        this.show_places_left();
        this.gate.close();
    }

    main_loop(): void {
        if (input.buttonIsPressed(Button.A)) {
            this.places_left -= 1;
            this.open_gate();
        } else if (input.buttonIsPressed(Button.B)) { /* TODO: Implement ultrasonic */
            this.places_left += 1;
            this.open_gate();
        }

        this.lamp.tick();
    }

    open_gate(): void {
        this.gate.open();
        basic.pause(3000);
        this.show_places_left();
        basic.pause(12000);
        this.gate.close();
    }

    show_places_left(): void {
        basic.showNumber(this.places_left);
    }
}

function main(): void {
    let app: Main = new Main();
    app.init();
    basic.forever((): void => app.main_loop());
}

main();