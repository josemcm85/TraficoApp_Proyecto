function velocimetro(a){
    if (a<0){
        return "dato incorrecto, no puede ser negativo";
    }
    else if(a<50){
        return "Por debajo de velocidad permitida";
    } else if (a>90) {
        return "Por encima de velocidad permitida";
    } else {
        return "Velocidad correcta"
    }
}

module.exports = velocimetro