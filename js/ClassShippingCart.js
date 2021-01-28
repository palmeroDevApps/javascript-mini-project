class Carrito {
    constructor(carrito, articulos) {
        this.carrito = carrito;
        this.articulos = articulos;
        var total = 0;
        this.verCompra = function(displayConteiner) {
            let grilla = "";
            //displayConteiner.innerHTML = "";
            for (let i in this.carrito) {
                for (let j in this.articulos) {
                    if (this.articulos[j].id == carrito[i]) {
                        grilla += "<div>" +
                            "<img class='carritoSectionImage' src='images/" + articulos[j].image + "'>" +
                            "<span class='articleShipCartSpace'>" + articulos[j].articleName + "</span>" +
                            "<span class='articleShipCartSpace'>" + articulos[j].price + "</span>" +
                            "<span>$</span>" +
                            "<span class='articleShipCartSpace'>Cantidad: </span>" +
                            "<span id='" + articulos[j].id + "' class='articleQtity'> 1 </span>" +
                            "<span> <button class='btn btn-dark articleShipCartSpace' onclick='removeArticleInShipCart("+ articulos[j].id +")'>Eliminar</button> </span>" +
                            "</div>";
                        total += articulos[j].price;
                    }
                }
            }

            displayConteiner.innerHTML = grilla;
        }
        this.displayTotal = function(displayConteiner) {
            let grilla = "";
            grilla = "<span>El total a comprar es: </span><span>" + this.getTotal() +"$"+"</span>";
            displayConteiner.html(grilla);
        }

        this.getTotal = function() {
            let total = 0;
            for (let i in articlesQtityShippingCart) {
                for(let j in this.articulos){
                    if (this.articulos[j].id == articlesQtityShippingCart[i].articleId) {
                        total += articulos[j].price * articlesQtityShippingCart[i].quantity
                    } 
                }
            }
            return total;
        }

        this.showAcceptAndDeclineButton = function(displayConteiner){
            let grilla = "" ;
            grilla = "<span> <button id='acceptButton' class='btn btn-dark'>Aceptar</button> </span>" +
                     "<span> <button id='declineButton' class='btn btn-dark'>Declinar</button> </span>";
            displayConteiner.html(grilla);
        }
        
    }
}