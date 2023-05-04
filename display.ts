class Display {
    display(places_left: number) {
        basic.showNumber(places_left);
    }

    display_mode (mode: Mode) {
        if (mode == Mode.enter) {
            ICON_IMAGES[0].showImage(0);
        } else if (mode == Mode.leave) {
            ICON_IMAGES[1].showImage(0);
        } else if (mode == Mode.no_places_left) {
            ICON_IMAGES[2].showImage(0);
        }
    }
}