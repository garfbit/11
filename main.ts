let numero1 = 0
let numero2 = 0
basic.forever(function () {
    numero1 = 5
    numero2 = 8
    if (numero1 > numero2) {
        basic.showString("Número mayor número 1")
    }
    if (numero1 < numero2) {
        basic.showString("Número mayor número 2")
    }
})
