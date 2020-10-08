input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
})
basic.forever(function () {
    basic.showNumber(0)
    basic.pause(5000)
    basic.showIcon(IconNames.Heart)
})
