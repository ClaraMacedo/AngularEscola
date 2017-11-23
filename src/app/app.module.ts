import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { TurmaComponent } from './turma/turma.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { CadastroDeDisciplinaComponent } from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoasService} from './pessoas.service';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
        PaginaNaoEncontradaComponent,
        HomeComponent,
        TurmaComponent,
        ListaDeDisciplinasComponent,
        DisciplinaComponent,
        CadastroDeDisciplinaComponent,
        ListaDePessoasComponent,
        CadastrarPessoaComponent,
        PessoaComponent,
    ],
    providers: [
        TurmasService,
        DisciplinasService,
        PessoasService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
