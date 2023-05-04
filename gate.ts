let PIN_SERVO: PwmOnlyPin = pins.P0;


class GateController extends Controller {
    servo: servos.PinServo;

    constructor(pin: PwmOnlyPin = PIN_SERVO) {
        super(pin as PwmPin);

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