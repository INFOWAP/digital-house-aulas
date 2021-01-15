function limpar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacao').value = "";
    document.getElementById('resultado').value = "";
};

function calcular() {
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado;
    //numero1 = parseFloat(numero1);
    //numero2 = parseFloat(numero2);
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    if (numero1 != parseFloat(numero1)) {
        alert(`Você não digitou um número! "Campo 1"`);
        return false;
    };
    if (numero2 != parseFloat(numero2)) {
        alert(`Você não digitou um número! "Campo 1"`);
        return false;
    };
    if (numero1 == "") {
        alert(`Favor digitar um número válido para a operação "Campo 1"`);
        return false;
    };
    if (numero2 == "") {
        alert(`Favor digitar um número válido para a operação "Campo 2"`);
        return false;
    };
    if (operacao == "") {
        alert(`Favor escolher uma operação válida "Selecione uma operação"`);
        return false;
    };

    switch (operacao) {
        case 'sub': resultado = numero1 - numero2;
            break;
        case 'adi': resultado = numero1 + numero2;
            break;
        case 'mult': resultado = numero1 * numero2;
            break;
        case 'div': resultado = numero1 / numero2
            if (numero1 == 0) {
                alert(`${numero2} não é divisível por "zero"`);
            };
            break;

        default:
    }
    limpar();
    document.getElementById('resultado').value = resultado;

};