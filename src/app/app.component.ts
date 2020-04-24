import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';

  // tslint:disable-next-line: no-inferrable-types
  curso: string = 'Curso Spring 5 con Angular';
  profesor: string = 'Angel Rodriguez';
}
