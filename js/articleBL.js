let HTMLCanvas = "";
let jsonArticles = [];
$(document).ready(() => {

    function setCanvasArticles(conteinerProducts) {
        $.ajax({
            url: "js/jsonArticles.json",
            dataType:"json",
            success: function(response){
                jsonArticles = response;
                concatFila = `<div class='conteinerProducts-products'>`;
                let counter = 1;
                $.each(jsonArticles,function(i){
                    
                    concatFila +=  `
                        <div class='col-xs-12 col-md-3 conteinerProducts-products-product'>
                        <div><a href=''><img src='./images/${jsonArticles[i].image}' alt='Imagen de home1'/></a></div>
                        <div>${jsonArticles[i].articleName}</div>
                        <div><span>Precio: </span><span>${jsonArticles[i].price}</span><span>$</span></div>
                        <div><button type='button' class='btn btn-primary' id='articlesButton' value='pruebaValue' onclick="addToCart(${jsonArticles[i].id})">Agregar al carrito</button></div>
                        </div> 
                    `;
                    
                    if (counter % 3 == 0) {
                        concatFila += `</div><div class='conteinerProducts-products'>`;
                    }
                    counter += 1;
                });
                concatFila += `</div>`;
                conteinerProducts.innerHTML = concatFila;
                articlesInShippingCart(); //veamos si realmente esto conviene ponerlo acá
            },
            error: function(){
                concatFila = `
                <div class='conteinerProducts-products'>
                    <h3>Error al cargar el contenido, intente nuevamente más tarde</h3>
                </div>
                `;

                conteinerProducts.innerHTML = concatFila;
            } 
        });
        
    }

    document.body.onload = setCanvasArticles(conteinerProducts);
});

function articlesInShippingCart() {
    if (articlesDisplayQty.innerText == "") {
        articlesDisplayQty.innerText = 0;
    } else {
        let totalArticlesInShipping = 0;
        for(let i in articlesQtityShippingCart){
           totalArticlesInShipping += articlesQtityShippingCart[i].quantity; 
        }

        articlesDisplayQty.innerText = totalArticlesInShipping;
    }

}

function seeArticleDetail(i){
    let detalleJsonrticles = jsonArticles.find(item => item.id == i);
    localStorage.setItem("contenido", JSON.stringify(detalleJsonrticles));
    location.href = "prueba.html"//location.href devuelve nuestra url normal
}