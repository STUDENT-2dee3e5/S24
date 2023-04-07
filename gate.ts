let PIN_SERVO: PwmPin = pins.P0;


class GateController extends Controller {
    servo: servos.PinServo;

    constructor(pin: PwmPin = PIN_SERVO) {
        super(pin);

        this.servo = new servos.PinServo(this.pin);

        this.close();
    }

    open(): void {
        this.servo.setAngle(180);
    }

    close(): void {
        this.servo.setAngle(90);
    }
}