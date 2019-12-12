import {VeiculoTerrestre} from './Veiculo';
import { Imetodos } from './Imetodos';

export class Carro extends  VeiculoTerrestre implements Imetodos{
    
    /* METODOS */
    trocarMarcha() {
        console.log("Trocando marcha com a MÃO")
    }
    freia(){
        console.log("Freia com o PÉ")
    };
}
