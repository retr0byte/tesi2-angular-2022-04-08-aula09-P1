import { Component, OnInit } from '@angular/core';
import { GabrielDisciplinasService } from '../gabriel-disciplinas.service';

@Component({
  selector: 'app-gabriel-lista',
  templateUrl: './gabriel-lista.component.html',
  styleUrls: ['./gabriel-lista.component.css'],
})
export class GabrielListaComponent implements OnInit {
  constructor(public disciplinas: GabrielDisciplinasService) {}

  ngOnInit() {}
}
