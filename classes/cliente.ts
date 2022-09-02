
export class Cliente {

    public name: string;
    public age: number;
    public uid: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.uid = new Date().getTime();
    }

    get getCliente() {
        return { name: this.name, age: this.age, uid: this.uid };
    }

}