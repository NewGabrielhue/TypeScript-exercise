# TypeScript-exercise
typescript exercise


Crie um projeto que represente uma Conta Bancária, respeitando a seguinte estrutura e 
composição das classes:

| Classe        |                         Atributos                              |
|---------------|----------------------------------------------------------------|
| Endereco      | cidade (string) bairro (string)                                |
|  Cliente      | nome(string)                                                   |
|  Agencia      | nome(string) endereco(Endereco)                                |
| ContaBancaria | cliente(Cliente) agencia(Agencia) numero(string) saldo(number) |

Siga as seguintes instruções:
1. Todos os atributos das classes são private, exceto saldo que é readonly;
2. Todos os atributos das classes devem ter métodos de acesso (getters e setters);
3. Todas as classes devem ter construtores;
4. Crie um método em conta bancária chamado: informacoesConta(), que ao seu chamado 
exibe as seguintes informações da conta: 
a. Número da conta
b. Nome do cliente
c. Saldo
d. Nome da agência
e. Cidade da agência
f. Bairro da agência
5. Crie um arquivo app.ts, crie um conta com e execute o método informacoesConta()
