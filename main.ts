// SICHERHEITS-FUNKTION: Manueller Speicher-Reset vor dem Start
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    music.playTone(262, music.beat(BeatFraction.Whole))
    datalogger.deleteLog()
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Target)
})
let gForce = 0
let light2 = 0
let temp = 0
let timeStamp = 0
// Start-Symbol: Zeigt an, dass der Logger bereit ist
basic.showIcon(IconNames.Target)
// Spalten in der internen Tabelle definieren
datalogger.setColumns([
"Zeit_ms",
"Temp_C",
"Licht",
"G_Kraft"
])
// Standard-Zeitstempel deaktivieren, da wir unseren eigenen in Millisekunden nutzen
datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
basic.forever(function () {
    timeStamp = control.millis()
    temp = input.temperature()
    light2 = input.lightLevel()
    gForce = input.acceleration(Dimension.Strength)
    // Hier lag der Fehler – jetzt sauber ohne Array-Klammern
    datalogger.log(
    datalogger.createCV("Zeit_ms", timeStamp),
    datalogger.createCV("Temp_C", temp),
    datalogger.createCV("Licht", light2),
    datalogger.createCV("G_Kraft", gForce)
    )
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 2)
    basic.pause(4900)
})
