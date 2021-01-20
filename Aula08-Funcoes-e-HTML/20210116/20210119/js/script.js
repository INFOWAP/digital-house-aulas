//função para enviar dados para json-server.

function envio(){
    var nome = $('#nome').val();
    var cidade = $('#cidade').val();
    
    //Em javasript
    //document.getElementById('nome').value;
    //document.getElementById('cidade').value;
    
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/usuarios",
        data: {
            "id": 6,
            "nome": nome,
            "cidade": cidade
        },
        success: function(){
            alert("Dados salvos com sucesso!");
        },
        error: function(){
            alert("Ocorreu um erro inesperado!");
        }
    });
};
