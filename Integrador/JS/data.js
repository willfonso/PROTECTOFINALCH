class Productos{
    constructor(id, name, img, cat, price){
        this.id = id;
        this.name = name;
        this.img = img;
        this.cat = cat;
        this.price = price;
    }
    
    cuotas(){
        return this.price = this.price / 3;
    }
}


let products = [];

products.push(new Productos(1, "Mate Imperial", "../img/imperial1.jpg", "Mate", 5599));
products.push(new Productos(2, "Mate Imperial Clásico", "../img/imperial3.jpg", "Mate", 5999));
products.push(new Productos(3, "Mate Imperial Artesanal", "../img/imperial2.jpg", "Mate", 5599));
products.push(new Productos(4, "Mate Imperial Blanco", "../img/imperial4.jpg", "Mate", 5599));
products.push(new Productos(5, "Mate Camionero Madera", "../img/madera camionero.jpg", "Mate", 2999));
products.push(new Productos(6, "Mate Madera Cuello Alto", "../img/madera2.jpg", "Mate", 2499));
products.push(new Productos(7, "Mate Trensado Artesanal", "../img/trensado1.jpg", "Mate", 3499));
products.push(new Productos(8, "Mate Imperial Marrón", "../img/imperial5.jpg", "Mate", 4499));
products.push(new Productos(9, "Yerbera Cuero Blanco", "../img/yerbera1.jpg", "Yerbera", 1999));
products.push(new Productos(10, "Yerbera Cuero Marrón", "../img/yerbera2.jpg", "Yerbera", 1999));
products.push(new Productos(11, "Yerbero Cuero Marrón Oscuro", "../img/yerbera3.jpg", "Yerbera", 1999));
products.push(new Productos(12, "Yerbera Cuero Negro", "../img/yerbera5.jpg", "Yerbera", 1999));
products.push(new Productos(13, "Mate Camionero Cuero Beige", "../img/camionero1.jpg", "Mate", 4999));
products.push(new Productos(14, "Mate Camionero Artesanal", "../img/camionero2.jpg", "Mate", 5599));
products.push(new Productos(15, "Mate Camionero de Madera", "../img/camionero3.jpg", "Mate", 4999));
products.push(new Productos(16, "Mate Camionero Boca Ancha", "../img/camionero4.jpg", "Mate", 4999));
products.push(new Productos(17, "Mate Camionero Clásico", "../img/camionero5.jpg", "Mate", 4999));
products.push(new Productos(18, "Bombilla Pico Loro", "../img/bombilla picoloro.jpg", "Bombilla", 999));
products.push(new Productos(19, "Bombilla Recto", "../img/bombilla recto.jpeg", "Bombilla", 999));
products.push(new Productos(20, "Bombilla Resorte", "../img/bombilla1.jpg", "Bombilla", 499));
products.push(new Productos(21, "Termo Stanley Clásico", "../img/termo-11-40424372854957be2315911216849189-1024-1024.jpg", "Termo", 9999));
products.push(new Productos(22, "Termo con Pico Vertedor", "../img/termo aluminio.jpg", "Termo", 5999));
products.push(new Productos(23, "Termo Stanley Blanco", "../img/stanley blanco.jpg", "Termo", 8999));
products.push(new Productos(24, "Termo Lumilagro", "../img/lumilagro.jpg", "Termo", 3999));