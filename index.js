const fetch = require("node-fetch");
const velocimetro = require('./velocimetro');
localhostString = "http://localhost:3000";
let myJson;


const velocConductores = () => {
    for (let i = 0; i < myJson.length; i++) {
        let conductor = myJson[i];
        console.log(conductor.nombre + ' :' + velocimetro(conductor.velocidad));
    }
}

const getAll = async () => {
    const response = await fetch(localhostString+'/conductores');
    myJson = await response.json(); 
    console.log(myJson);
    velocConductores();
  }

getAll();


