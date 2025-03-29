import { catalogo } from "./lista-produtos";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto =         
        `<div class="produtos" id="card-produto-${produtoCatalogo.id}">
        <img src="${produtoCatalogo.imagem}" class="imagem-item">
        <div class="legenda-produto">
        <p class='productList'>${produtoCatalogo.item}</p>
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.valor}</p>
        </div>
        </div>`;
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }
}
