import Endereco from "./endereco";

class Agencia {
  private _nome: string;
  private _endereco: Endereco;

  constructor(nome: string, enderecoCidade: string, enderecoBairro: string) {
    this.nome = nome;
    this.endereco = new Endereco(enderecoCidade, enderecoBairro);
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get endereco(): Endereco {
    return this._endereco;
  }

  public set endereco(endereco: Endereco) {
    this._endereco = endereco;
  }
}

export default Agencia;
