import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleados-hijo-c',
  templateUrl: './empleados-hijo-c.component.html',
  styleUrl: './empleados-hijo-c.component.scss'
})
export class EmpleadosHijoCComponent implements OnInit {

  ngOnInit(): void {
  }
  @Input() empleadoLista:Empleado;

  @Input() indice:number;

  arrayCaracteristicas = [''];

  addCaracteristicas(nuevaCaracteristisca: string){
    this.arrayCaracteristicas.push(nuevaCaracteristisca)
  }
}
