class Cliente {
  private _nome: string;

  public set nome(nome: string) {
    this._nome = nome;
  }
  constructor(nome: string) {
    this.nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }
}

export default Cliente;
