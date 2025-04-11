let total = 0; // Valor total do carrinho
const itensCarrinho = []; // Array para armazenar os itens do carrinho

function adicionarAoCarrinho(preco) {
    total += preco;
    itensCarrinho.push(preco); // Adiciona ao carrinho
    document.getElementById("total").textContent = total.toFixed(2);
    atualizarCarrinho(); // Atualiza visual
}

function retirarDoCarrinho(preco) {
    const index = itensCarrinho.findIndex(item => item === preco);
    if (index !== -1) {
        itensCarrinho.splice(index, 1); // Remove o item do array
        total -= preco;
        document.getElementById("total").textContent = total.toFixed(2);
        atualizarCarrinho(); // Atualiza visual
    }
}

function atualizarCarrinho() {
    const listaItens = document.getElementById("itensCarrinho");
    listaItens.innerHTML = ''; // Limpa a lista atual

    itensCarrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `Produto ${index + 1} - R$ ${item.toFixed(2)}`;
        listaItens.appendChild(li);
    });
}

function limparCarrinho() {
    total = 0;
    itensCarrinho.length = 0; // Esvazia o array
    document.getElementById("total").textContent = total.toFixed(2);
    atualizarCarrinho();
}

function confirmarPedido(){
     alert ("Pedido confirmado! Embreve estará em sua residência!")


}

function alerta_endereco(){
    alert("Endereço confirmado!")
}
