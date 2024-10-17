import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados:Empleado[]=[

        new Empleado("Juan","Gomez","cargo1",1000),
        new Empleado("Ana","Martinezz","cargo2",1100),
        new Empleado("Carlos","Gonzales","cargo3",500),
        new Empleado("Martin","Diaz","rc4",1800),
        new Empleado("Luan","Lopez","rango5",2000),
      ];
    
      agregarEmpleadoServicio(empleado:Empleado){

        this.empleados.push(empleado);
      }
}