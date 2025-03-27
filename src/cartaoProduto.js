import { catalogo } from "./lista-produtos";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto =         
        `<div class="produtos" id="card-produto-${produtoCatalogo.id}">
        <img src="imagens/${produtoCatalogo.imagem}" class="imagem-item">
        <div id="pé-cartão">
        <p class='text-sm'>${produtoCatalogo.item}</p>
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.valor}</p>
        </div>
        </div>`;
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }
}
