class App {
    gate: GateController;
    lamp: LampController;

    constructor() {
        this.gate = new GateController(PIN_SERVO);
        this.lamp = new LampController(PIN_LAMP);
    }

    init(): void {}

    main_loop(): void {
        this.lamp.main_loop();
    }
}


function main(): void {
    let app: App = new App();

    app.init();
    basic.forever((): void => app.main_loop());
    loops.everyInterval
}

main();