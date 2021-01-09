/*
1 -	Criar e definir 5 variáveis com os seguintes valores: 
    a.	Um número inteiro positivo
    b.	Um número inteiro negativo
    c.	Um número decimal
    d.	Uma string
    e.	Um valor verdadeiro
*/
let numposi = 12;
let numneg = -12;
let numdec =0.12;
let palavra = `DigtalHouse`;
let liberar = true;

/*
2 - Agora imprima as variáveis acima usando a função console.log()
*/
console.log(`Número: ${numposi} positivo, ${numneg} negativo, ${numdec} decimal, ${palavra} é string, ${liberar} buleano.`)

/*
3 - Criar e definir 2 variáveis (nome e sobrenome) e imprimir a concatenação das variáveis adicionando um espaço no meio.
*/
var nome = "Adão";
var sobreNome = "Wapnyk";
console.log(nome+" "+sobreNome);

/*
4 - Experimente executar o seguinte código:
    var nome = "Clara";
    console.log(Nome);
    O que acontece?
*/
var nome = "Clara";
console.log(Nome);/*Váriavel "Nome" não foi definida, esta escrita diferente da váriavel declarada na primeira linha.*/

/*
5 - Experimente executar o seguinte código:
    var nome = "Clara";
    console.log(nome, sobrenome);
    O que acontece? Por quê?
*/
var nome = "Clara";
console.log(nome, sobrenome);/*A váriavel "sobrenome" não foi declarada, e deveria ser escrita desta forma "sobreNome".*/

/*
6 -	Escrever um texto em mais de uma linha e imprimir usando a função console.log()
*/
var texto = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";
console.log(texto);

/*
7 - criar 2 variáveis valorNulo e naodefinido, definindo os valores respectivamente como “null” e “undefined”, e imprimir as duas variáveis utilizando a função console.log().
*/
var valorNulo = null;
var naoDefinido = undefined;
console.log(valorNulo+" "+naoDefinido);

/*
8 - Criar um array com 5 frutas diferentes e imprimir utilizando a função console.log().
Criar uma variável de uma string com o texto: “Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar  
e criar o que sempre sonharam.”
*/

let frutas = ["Mamão", "Abacate", "Uva", "Laranja", "Limão"];
for (var i=0;i < frutas.length; i++){
    var posi = frutas[i];
    console.log(`A fruta ${i} é ${posi}.`);
};

var textoDig = "Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar, e criar o que sempre sonharam.";
console.log(textoDig);