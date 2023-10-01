//var // primeira variavel javascrip//
//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area; //vc pode comentar ela antes de declarar //


//let forma = 'retangulo'
//let altura = 5;
//let comprimento = 7;
//let area; //antes do if - ela precisa ser inicializada

//Não é interessante termos uma variável cujo valor possa ser alterado nos blocos. Como o var não tem muitas regras, podemos acabar também reutilizando o nome dessa variável. 
//Sendo assim, por segurança, é melhor mantermos o let.

//if(forma === 'retangulo'){
// area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2; //triangulo
//}
//console.log(area);

//ostirizar a var por ser solta //usamos let trocar - porem declarar// const uma vez declarada nao pode mudar - declarada antes//


const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area; //se declarar em const, nao podera ser modficada. seria inciailizada e declarada//

if (forma == 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area);


//mais usadas // let e const // const para constantes e let para variaveis//
