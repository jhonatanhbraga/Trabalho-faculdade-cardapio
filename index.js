let total = 0;// Valor total do carrinho
const itensCarrinho = [];// Array para armazenar os itens do carrinho
function adicionarAoCarrinho (preco){   
    total += preco;


    

itensCarrinho.push(preco);//add ao carrinho
document.getElementById("total").textContent = total.toFixed(2);
//mostra novo total 
}

//atualiza a lista de itens no carrinho

function atualizarCarrinho (){
    const listaItens= document.getElementById('itensCarrinho');
    listaItens.innerHTML = '';//limpa lista atual 

    //adiciona itens ao carrinho
    itensCarrinho.forEach((item,index) => {
        const li =document.createElement('li');
        li.textContent= `produto ${index + 1} - R$ ${item.toFixed(2)}`
        listaItens.appendChild(li);


    })
}



function retirarDocarrinho (preco){   
    total -= preco;


    

itensCarrinho.pop(preco);//retira do carrinho
document.getElementById("total").textContent = total.toFixed(2);
//mostra novo total 
}