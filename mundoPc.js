class DispositivoEntrada {
    constructor (tipoEntrada ,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this.marca
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton = ++Raton.contadorRatones
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado:[idTeclado ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}


class Monitor {
    static contadorMonitor = 0;
    constructor(marca,tamaño){   
        this._marca=marca
        this._tamaño=tamaño 
        this._idMonitor = ++Monitor.contadorMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    get tamaño(){
        return this.tamaño
    }
    set tamaño(tamaño){
        this.tamaño = tamaño
    }
    get idMonitor(){
        return this._idMonitor;
    }
    

    toString(){
        return `Monitor:[idMonitor ${this._idMonitor}, tamaño: ${this._tamaño}, marca: ${this._marca}]`;
    }
}

class Computadora {
    static contadorComputadora= 0
    constructor(nombre,monitor,raton,teclado){
        this._idComputadora = ++Computadora.contadorComputadora
        this._nombre=nombre
        this._monitor= monitor
        this._raton= raton
        this._teclado = teclado
    }
    toString() {
        return `Computadora: ${this._idComputadora}: ${this._nombre}\nMonitor: ${this._monitor}\nRaton: ${this._raton}\nTeclado: ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora) 
    }

    mostrarOrden(){
        let computadorasOrden = ""
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        } 
        console.log(`Orden: ${this._idOrden}, Computadora: ${computadorasOrden} `)
    }
}   

let raton1 = new Raton('USB','Hp')
let raton2 = new Raton('USB2','Hp2')
raton2.marca="hp3"
let teclado1 = new Teclado('USB', "pp")
teclado1.marca="HP"
let monitor1 = new Monitor("Samsung","42")
let computadora1 = new Computadora('HP',monitor1,raton1,teclado1)
let orden1 = new Orden()
let orden2 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora1)
orden1.mostrarOrden()
orden2.agregarComputadora(computadora1)
orden2.mostrarOrden

console.log(monitor1.toString())
console.log(raton1.toString())
console.log(raton2.toString())
console.log(teclado1.toString())
console.log(`${computadora1}`)


