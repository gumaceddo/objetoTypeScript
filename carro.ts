export class Carro {
    Placa: string;
    Cor: string;
    Modelo: string;
    private _private_id: Number;
    public get private_id(): Number {
        return this._private_id;
    }
    Ano: number;
    Marca: string;
    
    public set private_id(value: Number) {
        this._private_id = value;
    }

    //metodo
    ligar(){
        console.log("Ligando")
    }
    andar(){
        console.log("Acelerar")
    }
    frear(){
        console.log("Frear")
    }
    desligar(){
        console.log("Arrancar")
    }
}
var carro = new Carro();

    carro.Cor = "pink";
    carro.Modelo = "Sandero";
    carro.Marca = "Renault";
    carro.Ano = 1984
   
    carro.Placa = "Mag"
    carro.Cor = "Preto"
    carro.Modelo = "b24"
    carro.Ano = 1984
    carro.Marca = "camaro"