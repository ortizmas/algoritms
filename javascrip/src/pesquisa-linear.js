const prompt = require("prompt-sync")();

function busquedaLineal(arr, element) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === element) {
            return index;
        }
    }
    return -1;
}

const arreglo = [10, 5, 3, 8, 2, 6];
const elementoBuscado = Number.parseFloat(prompt("Ingrese o elemento para buscar: "));
const indece = busquedaLineal(arreglo, elementoBuscado);
console.log(`El elemento ${elementoBuscado} se encuentra en el indice ${indece}`);
