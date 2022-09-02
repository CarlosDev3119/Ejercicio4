import { Cliente } from "./classes/cliente";
import { Clientes } from "./classes/clientesEmpresa";

const usuario = new Cliente('Juan', 23);
const usuario2 = new Cliente('Carlos', 23);

const clientes = new Clientes();

clientes.addCliente(usuario.getCliente);
clientes.addCliente(usuario2.getCliente);

console.log(clientes.getClientes);
