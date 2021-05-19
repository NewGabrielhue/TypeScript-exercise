import Cliente from "./cliente";
import Agencia from "./agencia";

class ContaBancaria {
  private _cliente: Cliente;
  private _agencia: Agencia;
  private _numero: string;

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

  public get agencia(): Agencia {
    return this._agencia;
  }

  public set agencia(agencia: Agencia) {
    this._agencia = agencia;
  }

  public get numero(): string {
    return this._numero;
  }

  public set numero(numero: string) {
    this._numero = numero;
  }

  /**
   * informacoesConta
   */
  public informacoesConta() {
    console.log(
      `Número da conta: ${this.numero}\nNome do cliente: ${this.cliente.nome}\nSaldo: ${this.saldo}\nNome da agência: ${this.agencia.nome}\nCidade da agência: ${this.agencia.endereco.cidade}\nBairro da agência: ${this.agencia.endereco.bairro}`
    );
  }
}

export default ContaBancaria;
