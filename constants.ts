enum Icons {
    ARROW_IN = 0,
    ARROW_OUT = 1,
    STOP = 2,
}

let NUMBERS_IMAGES: { [key: number]: Image; } = {
    0: images.createImage(`
. # # . .
# . . # .
# . . # .
# . . # .
. # # . .`),
    1: images.createImage(`
. # # . .
. . # . .
. . # . .
. . # . .
. . # . .`),
    2: images.createImage(`
. # # . .
# . . # .
. . # . .
. # . . .
# # # # .`),
    3: images.createImage(`
# # # # .
. . . # .
. # # # .
. . . # .
# # # # .`),
    4: images.createImage(`
# . . # .
# . . # .
# # # # .
. . . # .
. . . # .`),
    5: images.createImage(`
. # # # .
# . . . .
# # # # .
. . . # .
# # # # .`),
    6: images.createImage(`
# # # # .
# . . . .
# # # # .
# . . # .
# # # # .`),
    7: images.createImage(`
# # # # .
. . . # .
. . # . .
. # . . .
# . . . .`),
    8: images.createImage(`
# # # # .
# . . # .
. # # . .
# . . # .
# # # # .`),
}

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