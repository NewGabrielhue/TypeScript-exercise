import { Endereco } from "./endereco";

export class Agencia{

    public constructor(private _numero:string, private _nome:string, private _endereco: Endereco){

    }

    
    public get numero() : string {
        return this._numero;
    }

    public set numero(numero : string) {
        this._numero = numero;
    }

    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    public get endereco() : Endereco {
        return this._endereco;
    }

    public set endereco(endereco : Endereco) {
        this._endereco = endereco;
    }
    
    
    
}