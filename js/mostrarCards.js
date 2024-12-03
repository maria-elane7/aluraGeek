import { conectando } from "./coexao.js";


const lista = document.querySelector("[data-lista]");

function cardsProdutos(imagem,titulo,valor){
    const listaProdutos = document.createElement("li");
    listaProdutos.className = "produtos";
    listaProdutos.innerHTML = `<img src="${imagem}">
                    <h3>${titulo}</h3>
                    <strong>${valor}</strong>
                    <div class="remover">
                    <i class="fa-solid fa-trash"></i>
                    </div>`
   
    return listaProdutos;

    lista.appendChild(novoCard);
}

async function listaProduto(){
    const listaItens = await conectando.listaProdutos();
    listaItens.forEach(elemento => lista.appendChild(cardsProdutos(elemento.imagem,elemento.titulo,elemento.valor)))
}

listaProduto()




document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("[data-lista]");
    lista.addEventListener("click", (evento) => {
    
        if (evento.target.classList.contains("fa-trash")) {
         
            const card = evento.target.closest(".produtos");
            if (card) {
                card.remove();
            }
        }
    });
});

