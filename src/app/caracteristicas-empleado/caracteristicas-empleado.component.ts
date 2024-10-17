import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.scss'
})
export class CaracteristicasEmpleadoComponent implements OnInit{
  
  @Output() caracteristicasEmpleado = new EventEmitter<string> ();
  
  constructor(private Servicio:ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  
  agregarCaracteristicas(value: string){
    this.caracteristicasEmpleado.emit(value)
    this.Servicio.mostrarMensaje("caracteristica nueva agregada: " + value);
  }



}
