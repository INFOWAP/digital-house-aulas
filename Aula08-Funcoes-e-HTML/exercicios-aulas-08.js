/*
Exercicio
Utilizando o vs-code (para abri-lo pressione f12 no seu teclado) ou o VS Code com node. Execute as seguintes tarefas:
*/

/*
1 - Crie uma função que recebe um número e verifica se ele é par ou ímpar.
*/
var recebe = 103;
function parOuIpmar(){
    if(this.recebe = recebe % 2 == 0){
        console.log(`O número ${recebe} é par`);
    } else{
        console.log(`O número ${recebe} é impar!`);
    };
};
parOuIpmar();

/*
2 - Crie uma arrow function que receba um número e verifique se é primo.
*/

ePrimo = (num = []) => {
    var cont = 0;
    var x;
    for(x=1;x<=num;x++){
        if(num% x==0){
            cont++;
        };
    };
    if(cont==2){
        return console.log(`${num} é primo!`);
    }else{
        return console.log(`${num} não é primo!`);
    }
};
ePrimo(11);

/*
3 - Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de
uma callback
*/
contAno = (callback) => {
    setTimeout(function () {
        return console.log(`Feliz ano novo!!!`);
        callback();
    }, 2000);

};
anoNovo = () => {
    var i;
    var regr;
    for (i = 10; i > 0; i--) {
        console.log(i);
    };
};

anoNovo();
contAno();

/*
4 - Faça o mesmo utilizando Promise com concatenação de then
*/

/*
5 - Agora repita a função utilizando o método async/await
*/

/*
6 - Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0],
construa uma função para imprimir apenas as notas acima de 7
*/

/*
7 - Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do
produto e o seu respectivo preço, agora construa uma função que some todos os valores e te devolva
o total.
*/

/*
8 - Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º
terão aulas de física às quartas-feiras. Você deve criar uma função que receba um array de objetos
contendo nome e série de cada aluno e atribua a sua respectiva disciplina da quarta-feira. (O array
    de alunos deve ser criado como você desejar contanto que contenha pelo menos 5 alunos).
*/