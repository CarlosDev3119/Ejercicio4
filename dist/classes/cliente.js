"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.uid = new Date().getTime();
    }
    get getCliente() {
        return { name: this.name, age: this.age, uid: this.uid };
    }
}
exports.Cliente = Cliente;
