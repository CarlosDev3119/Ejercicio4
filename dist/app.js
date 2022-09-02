"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./classes/cliente");
const clientesEmpresa_1 = require("./classes/clientesEmpresa");
const usuario = new cliente_1.Cliente('Juan', 23);
const usuario2 = new cliente_1.Cliente('Carlos', 23);
const clientes = new clientesEmpresa_1.Clientes();
clientes.addCliente(usuario.getCliente);
clientes.addCliente(usuario2.getCliente);
console.log(clientes.getClientes);
