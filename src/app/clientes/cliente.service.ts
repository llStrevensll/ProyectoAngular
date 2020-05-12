import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  // Obtener clientes
  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES); // Creamos nuestro flujo Observable a partir de los objetos CLIENTES
    return this.http.get<Cliente[]>(this.urlEndPoint); // Castear a <Cliente[]>
/*
      return this.http.get(this.urlEndPoint).pipe(
        map(response => response as Cliente[]) // castear response a Cliente[]
      );*/
  }

  // Crear Cliente
  create(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  // Obtener CLiente por Id
  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  // Actualizar cliente
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  // Eliminar Cliente
  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
