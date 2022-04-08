import { Injectable } from '@angular/core';
import { listData } from './list';

interface Disciplinas {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
  objetivos: string;
}

@Injectable()
export class GabrielDisciplinasService {
  list: Array<Disciplinas> = listData;

  constructor() {}

  getList() {
    return this.list;
  }

  add(disciplina: Disciplinas) {
    this.list.push(disciplina);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
