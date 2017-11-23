import {Injectable} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class PessoasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API_URL + '/pessoas');
  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.API_URL + '/pessoas/' + id);
  }

  addPessoa(nome: string): Observable<any> {
    const pessoa = {nome: nome};
    return this.http.post(this.API_URL + '/pessoas', pessoa);
  }
}
