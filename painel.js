import Voo from './Voo.js';

const inputCodigo = document.getElementById("codigoVoo");
const inputOrigem = document.getElementById("origemVoo");
const inputDestino = document.getElementById("destinoVoo");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");

btnRegistrar.addEventListener("click", () => {
    try {
        console.log("✈️ Tentando cadastrar voo no sistema...");

        const codigo = inputCodigo.value;
        const origem = inputOrigem.value;
        const destino = inputDestino.value;

        const novoVoo = new Voo(codigo, origem, destino);

        mensagemTela.innerText = `✨ Voo ${novoVoo.codigo} registrado com sucesso de ${novoVoo.origem} para ${novoVoo.destino}! 🛫`;
        mensagemTela.className = "sucesso";

        inputCodigo.value = "";
        inputOrigem.value = "";
        inputDestino.value = "";

    } 
    catch (erro) {
        console.error("🚨 Equipe de resgate acionada:", erro.message);
        
        mensagemTela.innerText = erro.message;
        mensagemTela.className = "erro";
    } 
    finally {
        console.log("🔄 Tentativa de registro finalizada.");
    }
});