var carrito = [];
var articlesQtityShippingCart = [];

//Lógica para agregar al carrito de compras
function addToCart(articleId) {
    let isExist = false;
    for (let i in carrito) {
        if (carrito[i] == articleId) {
            isExist = true;
            break;
        }
    }
    if (isExist == false) {
        carrito.push(articleId);
        articlesQtityShippingCart.push(new ArticleShippingCart(articleId,1));
    }
    if (isExist == true) {
        articleQtyInShippingCart(articleId);
    }
    
    articlesInShippingCart();
}

function showShippingCart() {    
    let displayTotalCarrito = $("#totalCarrito");
    let acceptAndDeclineConteiner = $("#completeTransactionConteiner")
        shoppingCart = new Carrito(carrito, ARTICLES);
        shoppingCart.verCompra(carritoComprasProductContainer);
        shoppingCart.displayTotal(displayTotalCarrito);
        shoppingCart.showAcceptAndDeclineButton(acceptAndDeclineConteiner);
}

function removeArticleInShipCart(articleId){
    for(let i in carrito){
        if(carrito[i] == articleId){
            carrito.splice(i,1);
            articlesQtityShippingCart.splice(i,1);
            showShippingCart();
            articlesInShippingCart();
        }
    }
    for(let i in articlesQtityShippingCart){
        if(articlesQtityShippingCart[i].articleId == articleId){
            articlesQtityShippingCart.splice(i,1);
        }
    }
}

function articleQtyInShippingCart(articleId) {
   for(let i in articlesQtityShippingCart){
        if(articlesQtityShippingCart[i].articleId == articleId){
            articlesQtityShippingCart[i].quantity += 1;
        }    
    }

}

function acceptShippingCartTransaction(){
    alert("La transacción fue completada exitosamente!");
    location.reload();
}

function declineShippingCartTransaction(){
    $("#carritoComprasSection").remove();
    carrito = [];
    articlesQtityShippingCart = [];
    articlesInShippingCart();
    localStorage.clear();
    location.reload();
    
}

function modifyArticleQuantity(){
    let articleShippingQuantities = $(".articleQtity");
    for(let i in articlesQtityShippingCart){
        for(let j in articleShippingQuantities){
            if(articlesQtityShippingCart[i].articleId == articleShippingQuantities[j].id){
                articleShippingQuantities[j].innerHTML = articlesQtityShippingCart[i].quantity;
            }
        }
    }
}

$(document).ready(() => {
    let shoppingCartButton = $("#navbarTogglerDemo02 > div > a > i");
    shoppingCartButton.click(() => {
        showShippingCart();
        let declineButton = $("#declineButton");
        let acceptButton = $("#acceptButton");
        modifyArticleQuantity();
        declineButton.click(declineShippingCartTransaction);
        acceptButton.click(acceptShippingCartTransaction);
        return (false);
    });
});