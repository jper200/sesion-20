let velocidad = 200
let x = 0
let y = 0
for (let index = 0; index < 3; index++) {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(velocidad)
            basic.clearScreen()
        }
    }
    velocidad += -80
}
basic.showIcon(IconNames.Yes)
