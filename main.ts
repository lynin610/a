input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # # .
        `)
    music.playMelody("- - - - - - - - ", 120)
})
basic.forever(function () {
	
})
