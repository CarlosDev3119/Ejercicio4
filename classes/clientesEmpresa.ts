import { Cliente } from "./cliente";

type ClientesType  = {
    name: string;
    age: number;
    uid: number;
}

export class Clientes{

    public clientes: ClientesType[];

    constructor(){
        this.clientes = [];
    }

    addCliente( cliente: ClientesType){
        this.clientes.push(cliente);
    }

    get getClientes(){

        return this.clientes;
    }

}