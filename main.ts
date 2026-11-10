/**
 * Do not edit below this note!
 */
radio.onReceivedNumber(function (receivedNumber) {
    comment.comment("DO NOT EDIT!")
    if (receivedNumber == 1) {
        Blue()
    } else if (receivedNumber == 2) {
        Red()
    } else if (receivedNumber == 3) {
        Green()
    } else if (receivedNumber == 4) {
        Yellow()
    }
})
function Yellow () {
    basic.showArrow(ArrowNames.East)
}
radio.onReceivedValue(function (name, value) {
    comment.comment("DO NOT EDIT!")
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
function Green () {
    basic.showArrow(ArrowNames.West)
}
function Blue () {
    basic.showArrow(ArrowNames.North)
}
function StartUp () {
    basic.showIcon(IconNames.Yes)
    radio.setGroup(0)
}
function Red () {
    basic.showArrow(ArrowNames.South)
}
let yValue = 0
let xValue = 0
comment.comment("DO NOT EDIT!")
let xAxis = 0
let yAxis = 0
let y = 0
let x = 0
StartUp()
basic.forever(function () {
    comment.comment("DO NOT EDIT!")
    xAxis = TinkerBott.joystick(TinkerBott.Rocker.y) as number
yAxis = TinkerBott.joystick(TinkerBott.Rocker.x) as number
x = Math.map(xAxis, 1023, 0, 100, -100)
    y = Math.map(yAxis, 1023, 0, 100, -100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
basic.forever(function () {
    comment.comment("DO NOT EDIT!")
    wuKong.setAllMotor(yValue + xValue, yValue - xValue)
})
basic.forever(function () {
    comment.comment("DO NOT EDIT!")
    if (TinkerBott.Four_bit_key(TinkerBott.Four_key.up)) {
        radio.sendNumber(1)
    }
    if (TinkerBott.Four_bit_key(TinkerBott.Four_key.down)) {
        radio.sendNumber(2)
    }
    if (TinkerBott.Four_bit_key(TinkerBott.Four_key.left)) {
        radio.sendNumber(3)
    }
    if (TinkerBott.Four_bit_key(TinkerBott.Four_key.right)) {
        radio.sendNumber(4)
    }
})
