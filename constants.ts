enum Icons {
    ARROW = 0,
    STOP = 1,
}

let NUMBERS_IMAGES: { [key: number]: Image; } = {
    0: images.createImage(`
. # # # .
# . . . #
# . . . #
# . . . #
. # # # .`),
    7: images.createImage(`
# # # # #
. . . # .
. . # . .
. # . . .
# . . . .`),
    8: images.createImage(`
. # # # .
# . . . #
. # # # .
# . . . #
. # # # .`),
}

let ICON_IMAGES: { [key: number]: Image; } = {
    0: images.arrowImage(ArrowNames.North),
    1: images.createImage(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #`),
}