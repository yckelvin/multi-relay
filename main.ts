// main.ts
// Define the blocks and interface with the Python functions

//% color=#00008B icon="\uf0e7" block="Shift Register"
namespace shiftregister {
    
    //% block="initialize shift register with latch %latch|clock %clock|data %data"
    export function init(latch: DigitalPin, clock: DigitalPin, data: DigitalPin): void {
        // Call the initialization function in Python
        control.runInBackground(() => {
            pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
            basic.pause(100);
            control.raiseEvent(9999, 1); // Use event ID to synchronize with Python
        });
    }

    //% block="set relays %state"
    export function setRelays(state: number): void {
        // Call the set relays function in Python
        control.runInBackground(() => {
            pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
            basic.pause(100);
            control.raiseEvent(9999, 2); // Use event ID to synchronize with Python
        });
    }

    //% block="set relays from binary inputs b1 %b1 b2 %b2 b3 %b3 b4 %b4 b5 %b5"
    //% b1.min=0 b1.max=1 b2.min=0 b2.max=1 b3.min=0 b3.max=1 b4.min=0 b4.max=1 b5.min=0 b5.max=1
    export function setRelaysFromBinaryInputs(b1: number, b2: number, b3: number, b4: number, b5: number): void {
        let binaryString = `${b1}${b2}${b3}${b4}${b5}`;
        if (/^[01]{5}$/.test(binaryString)) { // Validate the binary string to be exactly 5 characters of 0s and 1s
            control.runInBackground(() => {
                pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
                basic.pause(100);
                control.raiseEvent(9999, 3); // Use event ID to synchronize with Python
            });
        } else {
            basic.showString("Err"); // Show error on Microbit display if input is invalid
        }
    }
}
