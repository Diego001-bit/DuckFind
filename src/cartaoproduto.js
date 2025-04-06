import{ catalogo } from "./lista-produtos";

export function renderizarcatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto =         
        `<div class="produtos" id="card-produto-${produtoCatalogo.id}">
        <img src="${produtoCatalogo.imagem}" class="imagem-item">
        <div class="legenda-produto">
        <p class='productList'><strong>${produtoCatalogo.Nome}</strong></p>
        <p class='text-sm'>Material: ${produtoCatalogo.Material}</p>
        <p class='text-sm'>${produtoCatalogo.Cores}</p>
        <a href="${produtoCatalogo.link}" target="_blank"><div class="botao-afiliado"><span class="material-symbols-outlined">visibility</span></div></a>
        </div>
        </div>`;
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }
}
