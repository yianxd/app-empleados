import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Listaaaa ';

  constructor(private Servicio:ServicioEmpleadoService, private empleadosService: Empleado){
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregar(){

    let newEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.Servicio.mostrarMensaje("Nombre:" + newEmpleado.nombre);
    this.empleadosService

  }


}
