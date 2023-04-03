let places_left: number = 5;
let arrow_go: Image = images.arrowImage(ArrowNames.North);

function run_forever () {
    if (input.buttonIsPressed(Button.A)) {
        arrow_go.showImage(0);
        places_left -= 1;
        basic.pause(2000);
    } else {
        basic.clearScreen()
    }
}

basic.forever(run_forever);
