import {Cliente} from "./Cliente.js";
import {Gerente} from "./funcionario/Gerente.js";
import {Diretor} from "./funcionario/Diretor.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const diretor = new Diretor("Rodrigo",10000,12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo",5000,98765432100);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 22233344455, "456");
const gerenteestaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorestaLogado = SistemaAutenticacao.login(diretor,"123456");
const clienteestaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(gerenteestaLogado, diretorestaLogado, clienteestaLogado);