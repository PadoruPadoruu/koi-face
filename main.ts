koi.koi_cloud_onfindface(function (name, confidence) {
    if (confidence >= 90) {
        koi.koi_print(
        "Hello" + name,
        0,
        0,
        1000
        )
    } else {
        koi.koi_print(
        "stranger",
        0,
        0,
        1000
        )
    }
})
koi.koi_cloud_onregface(function (token, sex, age, mask, expression) {
    koi.koi_cloud_facesearch(token, "client")
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
koi.koi_init_pw(koi.SerialPorts.PORT1)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_cloud_facerecognize()
basic.forever(function () {
	
})
