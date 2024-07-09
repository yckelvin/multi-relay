// main.ts
// Define the blocks and interface with the Python functions

//% color=#00008B icon="\uf0e7" block="Shift Register"
namespace shiftregister {
    
    //% block="initialize shift register with latch %latch|clock %clock|data %data"
    export function init(latch: DigitalPin, clock: DigitalPin, data: DigitalPin): void {
        // Call the initialization function in Python
        pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
        basic.pause(100);
        control.raiseEvent(9999, 1); // Use event ID to synchronize with Python
    }

    //% block="set relays %state"
    export function setRelays(state: number): void {
        // Call the set relays function in Python
        pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
        basic.pause(100);
        control.raiseEvent(9999, 2); // Use event ID to synchronize with Python
    }
}
