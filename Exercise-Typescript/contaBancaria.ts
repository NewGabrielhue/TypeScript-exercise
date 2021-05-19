import { Agencia } from "./agencia";
import { Cliente } from "./cliente";

export class ContaBancaria{

    public constructor(
        readonly saldo: number,
        private _numero: string,
        private _cliente: Cliente,
        private _agencia: Agencia,
        ){

        }


        public get numero() : string {
            return this._numero;
        }
    
        public set numero(numero : string) {
            this._numero = numero;
        }

        public get cliente() : Cliente {
            return this._cliente;
        }
    
        public set cliente(cliente : Cliente) {
            this._cliente = cliente;
        }


        public get agencia() : Agencia {
            return this._agencia;
        }
    
        public set agencia(agencia : Agencia) {
            this._agencia = agencia;
        }

        public informacoesConta(){
            console.log(
                `
                Conta: ${this._numero}
                Cliente: ${this._cliente.nome}
                Agencia: ${this._agencia.nome}
                Cidade: ${this._agencia.endereco.cidade}
                Bairro: ${this._agencia.endereco.bairro}
                Saldo: ${this.saldo}                
                `
            )
        }

}