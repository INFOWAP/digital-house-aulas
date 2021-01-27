import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-agenda',
  templateUrl: './painel-agenda.component.html',
  styleUrls: ['./painel-agenda.component.css']
})
export class PainelAgendaComponent implements OnInit {
 
/* agenda = [
    {id: 1, nome:"Adão", telefone:"(11)983019111"},
    {id: 2, nome:"Paloma", telefone:"(11)983019111"},
    {id: 3, nome:"Marianna", telefone:"(11)983019111"}
  ];*/

  agenda = [];

  constructor(private service:AgendaService) { };

  ngOnInit(): void {
    this.buscar();
  };

buscar(){
  this.service.
  listar().
  subscribe(resposta => this.agenda = <any> resposta);
};

}
