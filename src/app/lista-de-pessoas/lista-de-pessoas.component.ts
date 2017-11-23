import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";

@Component({
  selector: 'app-lista-de-pessoas',
  templateUrl: './lista-de-pessoas.component.html',
  styleUrls: ['./lista-de-pessoas.component.css']
})
export class ListaDePessoasComponent implements OnInit {
  pessoas = [];

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.pessoasService.getPessoas()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

}
