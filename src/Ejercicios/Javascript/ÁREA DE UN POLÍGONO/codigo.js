class Poligono{
    constructor(name){
        this.name=name
    }
    area(){
        return 
    }
    imprimirArea(){
        return `El area del ${this.name} es de ${this.area()}`
    }
}
function errorTipoDatos(){
    throw new Error('Los valores ingresados no corresponden a numeros')
}
export class Rectangulo extends Poligono{
    constructor(alto, ancho) {
        if( typeof alto != 'number' || typeof ancho != 'number') errorTipoDatos()
        super('rectangulo')
        this.alto = alto;
        this.ancho = ancho;
    }
    area(){
        return this.alto * this.ancho
    }
}
export class Triangulo extends Poligono{
    constructor(base, altura) {
        if( typeof base != 'number' || typeof altura != 'number') errorTipoDatos()
        super('triangulo')
        this.base = base;
        this.altura = altura;
    }
    area(){
        return ((this.base * this.altura) / 2)
    }
}
export class Cuadrado extends Poligono{
    constructor(lado) {
        if( typeof lado != 'number') errorTipoDatos()
        super('cuadrado')
        this.lado = lado;
    }
    area(){
        return this.lado * this.lado
    }
}

// const rectangulo = new Rectangulo('2.2',4);
// const triangulo = new Triangulo(1,8);
// const cuadrado = new Cuadrado(4);

// console.log(rectangulo.imprimirArea())
// console.log(triangulo.imprimirArea())
// console.log(cuadrado.imprimirArea())