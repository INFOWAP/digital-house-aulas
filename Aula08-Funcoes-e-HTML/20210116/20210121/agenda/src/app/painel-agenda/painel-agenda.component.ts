import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

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
  contato: any = {}; // = {id: 2, nome:"Paloma", telefone:"(11)983019111"},
  operacao: boolean;

  constructor(private service: AgendaService) { };

  ngOnInit(): void {
    this.buscar();
  };

  buscar() {
    this.service.listar()
      .subscribe(resposta => this.agenda = <any>resposta);
  };

  adicionar() {
    this.service.salvar(this.contato).subscribe(() => {
      this.contato = {}; //limpar os campos  
      this.buscar(); //atualizar a lista de agenda  
    });
  }

  excluir(id: number) {
    confirm(`Você tem certeza que quer excluír o registro ${id}`);
    this.service.excluir(id).subscribe(() => {
      this.buscar();
      alert(`O Id ${id} foi excluído com sucesso!`);
    },
      () => alert('Não foi possível excluír')
    );
  };
  inserirOuAtualizar() {
    if (this.operacao == true) { // Se a variável operacao igual a true ele cadastra um novo contato
      this.adicionar();
    } else { // Se não ele atualiza contato existente
      this.atualizar();
      this.operacao = true; // vai dizer para o sistema que agora ela voltar a cadastrar
    }
  }

  editar(cont: any) { // cont é nossa abreviação de contato
    this.contato = {id: cont.id, nome: cont.nome, telefone: cont.telefone};
    this.operacao = false; // dizer para o sistema que agora ele vai atualizar
  }

  atualizar() {
    this.service.atualizar(this.contato).subscribe(() => { // vai passar o valor dos inputs para dentro do serviço de atualizar
      this.contato = {};
      this.buscar();
    },
    () => alert("Não foi atualizar este contato."));
  }
};
