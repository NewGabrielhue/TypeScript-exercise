class Endereco {
  private _cidade: string;
  private _bairro: string;

  constructor(cidade: string, bairro: string) {
    this.cidade = cidade;
    this.bairro = bairro;
  }

  public set cidade(cidade: string) {
    this._cidade = cidade;
  }

  public get bairro(): string {
    return this._bairro;
  }

  public set bairro(bairro: string) {
    this._bairro = bairro;
  }
  public get cidade(): string {
    return this._cidade;
  }
}

export default Endereco;
