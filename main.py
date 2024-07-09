from microbit import *

class ShiftRegister:
    def __init__(self, latch, clock, data):
        self.latch_pin = latch
        self.clock_pin = clock
        self.data_pin = data
        self.latch_pin.write_digital(0)
        self.clock_pin.write_digital(0)
        self.data_pin.write_digital(0)

    def shift_out(self, data):
        for i in range(32):
            self.clock_pin.write_digital(0)
            bit = (data >> (31 - i)) & 1
            self.data_pin.write_digital(bit)
            self.clock_pin.write_digital(1)

    def set_relays(self, state):
        self.latch_pin.write_digital(0)
        self.shift_out(state)
        self.latch_pin.write_digital(1)

shift_register = None

def shift_register_init(latch, clock, data):
    global shift_register
    shift_register = ShiftRegister(latch, clock, data)

def shift_register_set_relays(state):
    if shift_register is not None:
        shift_register.set_relays(state)

def pin_lookup(pin_number):
    return {
        0: pin0,
        1: pin1,
        2: pin2,
        3: pin3,
        4: pin4,
        5: pin5,
        6: pin6,
        7: pin7,
        8: pin8,
        9: pin9,
        10: pin10,
        11: pin11,
        12: pin12,
        13: pin13,
        14: pin14,
        15: pin15,
        16: pin16,
        19: pin19,
        20: pin20,
    }[pin_number]
