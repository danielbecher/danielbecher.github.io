import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor,taxa);
    }
}