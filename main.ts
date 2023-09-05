let Teller = 0
basic.forever(function () {
    Teller += 1
    basic.pause(100)
    if (Teller > 10 && Teller < 20) {
        basic.clearScreen()
    } else {
        basic.showNumber(Teller)
    }
})
