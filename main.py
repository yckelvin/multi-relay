# ShiftRegister extension in MicroPython for Microbit
from microbit import *
import pxt  # Import the pxt module to expose functions to MakeCode

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

    def set_relays_from_binary(self, binary_string):
        if len(binary_string) != 5 or not all(c in '01' for c in binary_string):
            raise ValueError("Input must be a 5-digit binary string")
        
        # Convert 5-digit binary string to 32-bit integer
        state = int(binary_string, 2) << 27
        self.set_relays(state)

# Create a global instance of ShiftRegister
shift_register = None

@pxt.function("shift_register_init")
def shift_register_init(latch: int, clock: int, data: int):
    global shift_register
    shift_register = ShiftRegister(
        pin_lookup(latch), pin_lookup(clock), pin_lookup(data)
    )

@pxt.function("shift_register_set_relays")
def shift_register_set_relays(state: int):
    if shift_register is not None:
        shift_register.set_relays(state)

@pxt.function("shift_register_set_relays_from_binary")
def shift_register_set_relays_from_binary(binary: str):
    if shift_register is not None:
        shift_register.set_relays_from_binary(binary)

def pin_lookup(pin_number: int):
    """Helper function to map pin numbers to pin objects"""
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
