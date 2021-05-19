class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }
}

export default Cliente;
