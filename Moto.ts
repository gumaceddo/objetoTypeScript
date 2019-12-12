import { Imetodos } from './Imetodos';
import {VeiculoTerrestre} from './Veiculo';

export class Moto extends  VeiculoTerrestre implements Imetodos{
    
    /* METODOS */
    trocarMarcha() {
        console.log("Trocando marcha com o pé")
    }
    freia(){
        console.log("Freia com a mao")
    };
}
