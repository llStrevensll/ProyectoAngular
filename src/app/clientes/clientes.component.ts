import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  // Lista de tipo cliente
  clientes: Cliente[] = [
    {id: 1, nombre: 'Angel', apellido: 'Rodriguez', email: 'correo@email.com', createAt: '2020-12-11'},
    {id: 2, nombre: 'Emanuel', apellido: 'Rodriguez', email: 'correo1@email.com', createAt: '2020-12-11'},
    {id: 3, nombre: 'Steven', apellido: 'Castro', email: 'correo2@email.com', createAt: '2020-12-11'},
    {id: 4, nombre: 'Nombre', apellido: 'Apellido', email: 'correo3@email.com', createAt: '2020-12-11'},
    {id: 5, nombre: 'Nombre', apellido: 'Apellido', email: 'correo4@email.com', createAt: '2020-12-11'},
    {id: 6, nombre: 'Nombre', apellido: 'Apellido', email: 'correo5@email.com', createAt: '2020-12-11'},
    {id: 7, nombre: 'Nombre', apellido: 'Apellido', email: 'correo6@email.com', createAt: '2020-12-11'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
