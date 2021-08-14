const velocimetro = require('./velocimetro');

test('Idetifica apropiadamente cuando la velocidad esta dentro de los limites', () => {
    expect(velocimetro(73)).toBe("Velocidad correcta")
})

test('Idetifica apropiadamente cuando la velocidad esta por debajo del limite', () => {
    expect(velocimetro(30)).toBe("Por debajo de velocidad permitida")
})

test('Idetifica apropiadamente cuando la velocidad excede el limite maximo', () => {
    expect(velocimetro(100)).toBe("Por encima de velocidad permitida")
})

test('Identifica dato incorrecto cuando se ingresa un numero negativo', () => {
    expect(velocimetro(-56)).toBe("dato incorrecto, no puede ser negativo")
})