async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoCovertida = await conexao.json()
    return conexaoCovertida
}


async function criaProduto(imagem,titulo,valor){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            imagem:imagem,
            titulo:titulo,
            valor:valor
        })
    });

    const conexaoCovertida = await conexao.json();

    return conexaoCovertida;
}

export const conectando = {
    listaProdutos,
    criaProduto
}