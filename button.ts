let BUTTON: Button = Button.A;

class ButtonController {
    handle: () => void;

    constructor(button: Button = BUTTON) {
        input.onButtonPressed(button, (): void => this.handle());
    }

    setHandle(handle: () => void) {
        this.handle = handle;
    }
}