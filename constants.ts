enum Icons {
    ARROW_IN = 0,
    ARROW_OUT = 1,
    STOP = 2,
}

enum Mode {
    enter = 1,
    leave = -1,
    no_places_left = 0,
    display = 2,
}

let DAY_THRESHOLD: number = 128;
let DELAY: number = 3 * 1000;

let ICON_IMAGES: { [key: number]: Image; } = {
    0: images.arrowImage(ArrowNames.North),
    1: images.arrowImage(ArrowNames.South),
    2: images.createImage(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #`),
}