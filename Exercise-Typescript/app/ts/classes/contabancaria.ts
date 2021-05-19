import Cliente from "./cliente";
import Agencia from "./agencia";

class ContaBancaria {
  private _cliente: Cliente;
  private _numero: string;
  private _agencia: Agencia;

  readonly saldo: number = 0;

  constructor(
    clienteNome: string,
    agenciaNome: string,
    agenciaCidade: string,
    agenciaBairro: string,
    numero: string
  ) {
    this.cliente = new Cliente(clienteNome);
    this.agencia = new Agencia(agenciaNome, agenciaCidade, agenciaBairro);
    this.numero = numero;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }

  public set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  public get numero(): string {
    return this._numero;
  }

  public set numero(numero: string) {
    this._numero = numero;
  }
  public get agencia(): Agencia {
    return this._agencia;
  }

  public set agencia(agencia: Agencia) {
    this._agencia = agencia;
  }

  /**
   * informacoesConta
   */
  public informacoesConta() {
    console.log(
      `Nome do cliente: ${this.cliente.nome}\nSaldo: ${this.saldo}\nNúmero da conta: ${this.numero}\nNome da agência: ${this.agencia.nome}\nCidade da agência: ${this.agencia.endereco.cidade}\nBairro da agência: ${this.agencia.endereco.bairro}`
    );
  }
}

export default ContaBancaria;
