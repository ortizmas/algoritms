const prompt = require("prompt-sync")();

function busquedaBinaria(arr, element) {
	let inicio = 0;
	let fim = arr.length - 1;

	while (inicio <= fim) {
		const medio = Math.floor((inicio + fim) / 2);

		if (arr[medio] === element) {
            return medio;
        }if (arr[medio] < element) {
            inicio = medio + 1;
        } else {
            fim = medio - 1;
        }
	}
    
    return -1;
}

const arregloOrdenado = [2, 3, 5, 6, 8, 10];
const elementoBuscado = Number.parseFloat(
	prompt("Ingrese o elemento para buscar: "),
);
const indece = busquedaBinaria(arregloOrdenado, elementoBuscado);
console.log(
	`El elemento ${elementoBuscado} se encuentra en el indice ${indece}`,
);
