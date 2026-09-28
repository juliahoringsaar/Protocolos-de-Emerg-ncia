class Voo {
    constructor(codigo, origem, destino, capacidade = 100) {
        if (!codigo || codigo.trim() === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código identificador! 🏷️");
        }

        if (!origem.trim() || !destino.trim()) {
            throw new Error("Dados Incompletos: Origem e destino precisam ser preenchidos! 🗺️");
        }

        if (origem.trim().toLowerCase() === destino.trim().toLowerCase()) {
            throw new Error(`Operação Negada: O voo ${codigo.toUpperCase()} não pode ter origem e destino idênticos (${origem})! 🛑`);
        }

        if (capacidade <= 0) {
            throw new Error("Erro de Frota: A capacidade de passageiros deve ser maior que zero! 👥");
        }

        this.codigo = codigo.trim().toUpperCase();
        this.origem = origem.trim();
        this.destino = destino.trim();
        this.capacidade = capacidade;
    }
}

export default Voo;