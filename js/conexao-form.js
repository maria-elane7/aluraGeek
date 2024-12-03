import { conectando } from "./coexao.js";

const formulario = document.querySelector("[data-form]");

async function valorFormulario(evento){
    evento.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const valor = document.querySelector("[data-valor]").value;

    
    try {
        await conectando.criaProduto(imagem, titulo, valor);
        alert("Produto criado com sucesso!");
    } catch (erro) {
        console.error(erro);
        alert("Erro ao criar produto.");
    }
}

formulario.addEventListener('submit', evento => valorFormulario(evento));