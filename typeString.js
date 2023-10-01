//string//
const texto1 = 'Olá Mundo!';
const texto2 =  'Olá Mundo!';

const senha = 'senhaSuperSegura';

const stringDeNumeros =  '34567';

//const citacao = 'o Leo disse "Oi!" '; //em caso de citação, usar aspas duplas na citação//

const citacao = 'Meu nome é:  ';
const seuNome = "Franceline";

console.log(citacao);

//concatenação (+)//

console.log(citacao + seuNome); //o + na string junta as strings//

//comparação entre strings // 
const cidade = "ribeirao-preto";
const input = "Ribeirao-Preto";

console.log(cidade === input); // false //o JavaScript diferencia minúsculas e maiúsculas//

//toLowerCase() - converte todos os caracteres da string informada

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const minhaSenha = "minhaSenha123";
console.log(minhaSenha.length); // 13 caracteres
// length de um objeto String contém o comprimento da string. length é uma propriedade read-only (somente leitura) de instâncias de string. //


//pesquisar//
//template string ou template literal //
