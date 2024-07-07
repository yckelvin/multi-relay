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

    //% block="set relays from binary %binary"
    //% binary.shadow="text" binary.defl="00000"
    export function setRelaysFromBinary(binary: string): void {
        if (/^[01]{5}$/.test(binary)) { // Validate the binary string to be exactly 5 characters of 0s and 1s
            control.runInBackground(() => {
                pins.digitalWritePin(DigitalPin.P16, 0); // Trigger the Python function
                basic.pause(100);
                control.raiseEvent(9999, 3); // Use event ID to synchronize with Python
            });
        } else {
            basic.showString("Err");
        }
    }
}
