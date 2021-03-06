import {ConssionariaInterface} from "./ConssionariaInterface"
import Carro from "./Carro"

export default class Concessionaria implements ConssionariaInterface{

    private endereco:string
    private listaDeCarros:Carro[]

    constructor(endereco:string, listaDeCarros:Array<Carro>){

        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco():string{

        return this.endereco
    }

    public mostrarListaDeCarros():Array<Carro>{

        return this.listaDeCarros
    }
    
    public fornecerHorariosDeFuncionamento():string{

        return "de segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00"
    }

}