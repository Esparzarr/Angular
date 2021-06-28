import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  nombreLower: string = 'esparza';
  nombreUpper: string = 'ESPARZA';
  nombreCompleto: string = 'EsPaRZa RaMIRez';

  fecha: Date = new Date(); //el dia de hoy

}
