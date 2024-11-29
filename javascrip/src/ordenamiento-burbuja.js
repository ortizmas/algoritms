// Algoritmo de Classificação por Bolha
// Abaixo está uma ilustração que demonstra como o algoritmo funciona em sua primeira iteração, sendo [5, 3, 8, 2, 6] o arranjo original. 
// Neste caso nosso objetivo seria ordenar o algoritmo em ordem crescente.

function ordenamentoBurbuja(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const arreglo = [5, 3, 8, 2, 6];
const arregloOrdenado = ordenamentoBurbuja(arreglo);
console.log(arregloOrdenado);