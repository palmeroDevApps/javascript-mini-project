class Articulo {

    constructor(id, nombre, marca, precio, cantidad, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }

    setNombreArticulo(nombre) {
        this.nombre = nombre;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    setPrecioArticulo(precio) {
        this.precio = precio;
    }

    getNombreArticulo() {
        return this.nombre;
    }

    getPrecioArticulo() {
        return this.precio;
    }
}