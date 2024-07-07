// main.ts
// Define the blocks and interface with the Python functions

//% color=#00008B icon="\uf0e7" block="Shift Register"
namespace shiftregister {
    
    //% block="initialize shift register with latch %latch|clock %clock|data %data"
    export function init(latch: DigitalPin, clock: DigitalPin, data: DigitalPin): void {
        control.runInBackground(() => {
            basic.pause(100); // wait a bit for the Python environment
            pins.digitalWritePin(DigitalPin.P16, 0) // trigger the Python function
            basic.pause(100);
            control.raiseEvent(9999, 1)
        })
    }

    //% block="set relays %state"
    export function setRelays(state: number): void {
        control.runInBackground(() => {
            pins.digitalWritePin(DigitalPin.P16, 0) // trigger the Python function
            basic.pause(100);
            control.raiseEvent(9999, 2)
        })
    }

    //% block="set relays from binary %binary"
    export function setRelaysFromBinary(binary: string): void {
        control.runInBackground(() => {
            pins.digitalWritePin(DigitalPin.P16, 0) // trigger the Python function
            basic.pause(100);
            control.raiseEvent(9999, 3)
        })
    }
}
