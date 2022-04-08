import { Injectable } from '@angular/core';
import { listData } from './list';
import { Disciplina } from '../disciplinas';

@Injectable()
export class GabrielDisciplinasService {
  list: Array<Disciplina> = listData;

  constructor() {}

  getList() {
    return this.list;
  }

  add(disciplina: Disciplina) {
    this.list.push(disciplina);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
