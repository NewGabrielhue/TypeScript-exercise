import { Agencia } from "./agencia";
import { Cliente } from "./cliente";
import { ContaBancaria } from "./contaBancaria";
import { Endereco } from "./endereco";

let cli = new Cliente("Bolinha");
let end = new Endereco("Natal", "Centro");
let ag = new Agencia("2121-0","Central",end);

let  conta = new ContaBancaria(1000,"2121",cli,ag);

conta.informacoesConta();