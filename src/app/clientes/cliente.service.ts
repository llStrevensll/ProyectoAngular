import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES); // Creamos nuestro flujo Observable a partir de los objetos CLIENTES
    return this.http.get<Cliente[]>(this.urlEndPoint); // Castear a <Cliente[]>
/*
      return this.http.get(this.urlEndPoint).pipe(
        map(response => response as Cliente[]) // castear response a Cliente[]
      );*/
  }
}
