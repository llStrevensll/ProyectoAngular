import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  // Lista de tipo cliente
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Subscribirse al observador en cliente service
    this.clienteService.getClientes().subscribe(
      // Funcion Anonima
      clientes => this.clientes = clientes// clientes ->parametro, resultado del stream

      /** EQUIVALENTE: **/
      /*
      function(clientes) {
        this.clientes = clientes;
      }*/

      /*
      (clientes) => {
        this.clientes = clientes
      }*/
    );

  }

}
