//$(".alert");//Pegando o elemento pela "classe"
//$("#alerta");//Pegando o elemento pelo "ID"

//document.getElementById('alerta').innerHTML = "Olá JQuery!";

$("#alerta").text("Olá JQuery");
$("#alerta").remove("alert-primary");
$("#alerta").add("alert-danger");