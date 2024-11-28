const fs = require("fs");

const cpfs = () => {
	try {
        const data = fs.readFileSync("./public/cpfs/eleitor.json", "utf-8");
        const jsonData = JSON.parse(data);

        const cpfsAjustados = jsonData.eleitores.map(item => {
            if (item.cpf) {
                // Converte o CPF para string e ajusta o tamanho para 11 digitos
                return String(item.cpf).padStart(11, "0");
            }
            return null; // Ignora se não tiver CPF
        }).filter(cpf => cpf !== null); // Remove CPFs nulos

        return cpfsAjustados; // Retorna os cpfs ajustados como arr

    } catch (error) {
        console.log(error);
    }
};

// Obter os cpfs ajustados
const cpfsAjustados = cpfs();

if (cpfsAjustados) {
    // Salvamos em um arquivo txt, com salto de linha
    fs.writeFileSync("./public/cpfs/cpfs.txt", cpfsAjustados.join("\n"), "utf-8");
    console.log("Arquvio 'cpfs.txt' criado com sucesso!");
}
console.log("Não existe cpfs ajustados!");
