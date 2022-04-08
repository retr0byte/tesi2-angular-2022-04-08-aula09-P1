import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';
import { Disciplina } from '../disciplinas';

@Component({
  selector: 'app-gabriel-detalhes',
  templateUrl: './gabriel-detalhes.component.html',
  styleUrls: ['./gabriel-detalhes.component.css'],
})
export class GabrielDetalhesComponent implements OnInit {
  subject: Disciplina;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.subject = listData[params.get('index')];
    });
  }
}
