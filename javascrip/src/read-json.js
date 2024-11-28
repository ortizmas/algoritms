const fs = require("fs");

const cpfs = () => {
	try {
        const data = fs.readFileSync("./public/cpfs/eleitor.json", "utf-8");
        const jsonData = JSON.parse(data);

        // Adicionamos 0 a izquerda para cpfs menores que 11 digitos
        // biome-ignore lint/complexity/noForEach: <explanation>
        jsonData.eleitores.forEach(item => {
            if (item.cpf) {
                item.cpf = String(item.cpf).padStart(11, "0");
            }
        });

        return jsonData;

    } catch (error) {
        console.log(error);
        
    }
};

const result = cpfs();
console.log(result);
