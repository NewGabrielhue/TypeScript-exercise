export class Endereco{

    public constructor(private _cidade: string, private _bairro: string){

    }

    public get cidade() : string {
        return this._cidade;
    }
    
    public set cidade(cidade : string) {
        this._cidade = cidade;
    }

    public get bairro() : string {
        return this._bairro;
    }
    
    public set bairro(bairro : string) {
        this._bairro = bairro;
    }
}