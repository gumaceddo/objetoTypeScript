export class Computador {
    
    private _placaMae : boolean;
    
    private _processador : boolean;

    private _memoriaRam: boolean;

    private _chipGrafico: boolean;

    public get placaMae() : boolean {
        return this._placaMae;
    }
    public set placaMae(v : boolean) {
        this._placaMae = v;
    }
    
    public get processador() : boolean {
        return this._processador;
    }
    public set processador(v : boolean) {
        this._processador = v;
    }
    public get memoriaRam() : boolean {
        return this._memoriaRam;
    }
    public set memoriaRam(v : boolean) {
        this._memoriaRam = v;
    }
    public get chipGrafico() : boolean {
        return this._chipGrafico;
    }
    public set chipGrafico(v : boolean) {
        this._chipGrafico = v;
    }
    ligar(){
        console.log("Ligando...")
    }

    Desligar(){
        console.log("Desligando...")
    }
    conectarInternet(){
        console.log("WWW...")
    }
    Calcular(){
        console.log("Calcular...")
    }

    gerarCria(){
        if(this.Placentario){
            console.log("Parindo...") 
        }else{
            console.log("Infertil...") 
        }
    }
}