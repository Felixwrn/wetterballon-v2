let licht = 0
let temperatur = 0
let zeit = 0
serial.redirectToUSB()
basic.forever(function () {
    zeit = input.runningTime()
    temperatur = input.temperature()
    licht = input.lightLevel()
    serial.writeLine("" + zeit + "," + temperatur + "," + licht)
    basic.pause(5000)
})
