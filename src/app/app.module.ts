import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GabrielComponent } from './gabriel/gabriel.component';
import { GabrielDetalhesComponent } from './gabriel-detalhes/gabriel-detalhes.component';
import { GabrielListaComponent } from './gabriel-lista/gabriel-lista.component';
import { GabrielDisciplinasService } from './gabriel-disciplinas.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    GabrielComponent,
    GabrielDetalhesComponent,
    GabrielListaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GabrielDisciplinasService],
})
export class AppModule {}
