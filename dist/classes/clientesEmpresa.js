"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
class Clientes {
    constructor() {
        this.clientes = [];
    }
    addCliente(cliente) {
        this.clientes.push(cliente);
    }
    get getClientes() {
        return this.clientes;
    }
}
exports.Clientes = Clientes;
