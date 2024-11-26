// Função : Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um
// algoritmo que leia um cheque que entrou e ANALISE se o cheque poderá ser
// descontado ou não, já que o cliente não possi limite. Se o cheque não poder
// ser descontado, mostre essa informação, caso contrário, desconte o cheque
// e informe o saldo na tela.
const prompt = require("prompt-sync")();
(() => {
	const saldo = 500;
	let valor_cheque;
	let saldo_atual;
	console.log(saldo);
	valor_cheque = Number.parseFloat(prompt("Ingrese o valor do cheqeu: "));
  
    if (valor_cheque <= saldo) {
        saldo_atual = Number.parseFloat(saldo) - valor_cheque;
        console.log(`Saldo atual: ${saldo_atual}`);
    } else {
        console.log("Não têm saldo suficiente para ser descontado o cheque");
    }
})();
