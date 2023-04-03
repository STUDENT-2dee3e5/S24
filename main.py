PINS = [DigitalPin.P4,
        DigitalPin.P5,
        DigitalPin.P6,
        DigitalPin.P7]


def read_all_pins():
    """
    Read all the pins.

    :return bool: True if they are all on.
    """
    result = True
    for pin in PINS:
        if not pins.digital_read_pin(pin):
            result = False
    return result


def run_forever():
    """
    Forever loop.

    Repeats all the time.
    """
    if pins.digital_read_pin(DigitalPin.P0):
        led.plot(0, 0)
    else:
        led.unplot(0, 0)

basic.forever(run_forever)