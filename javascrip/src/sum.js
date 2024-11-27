const prompt = require("prompt-sync")();

const sum = (a, b, operacao) => {
    switch (operacao) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            break;
    }

    return result
}

operacao = prompt("Ingrese o timo de operação Ejemplo: (+, -, *, /): ")
if (operacao === '+' || operacao === '-' || operacao === '*' || operacao === '/') {
    a = Number.parseFloat(prompt("Ingrese valor 1: "))
    b = Number.parseFloat(prompt("Ingrese valor 2: "))
    console.log(sum(a, b, operacao));
} else {
    console.log("Operação no valida");
}

