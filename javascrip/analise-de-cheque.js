// Função : Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um
// algoritmo que leia um cheque que entrou e ANALISE se o cheque poderá ser
// descontado ou não, já que o cliente não possi limite. Se o cheque não poder
// ser descontado, mostre essa informação, caso contrário, desconte o cheque
// e informe o saldo na tela.
const prompt = require("prompt-sync")();
(() => {
	var saldo = 500,
		valor_cheque,
		saldo_atual;
	console.log(saldo);
	valor_cheque = Number.parseFloat(prompt("Ingrese o valor do cheqeu: "));
    console.log(valor_cheque);
})();
