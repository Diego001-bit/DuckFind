import{ catalogo } from "./lista-produtos";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto =         
        `<div class="produtos" id="card-produto-${produtoCatalogo.id}">
        <img src="${produtoCatalogo.imagem}" class="imagem-item">
        <div class="legenda-produto">
        <p class='productList'><strong>${produtoCatalogo.item}</strong></p>
        <p class='text-sm'>Marca: ${produtoCatalogo.material}</p>
        <p class='text-valor'>R$ ${produtoCatalogo.valor}</p>
        <p class='text-sm'>${produtoCatalogo.Cores}</p>
        <a href="${produtoCatalogo.link}" target="_blank"><div class="botao-afiliado"><span class="material-symbols-outlined">shopping_cart </span></div></a>
        </div>
        </div>`;
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }
}
