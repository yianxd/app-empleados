import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EmpleadosHijoCComponent } from './empleados-hijo-c/empleados-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosHijoCComponent,
    CaracteristicasEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ServicioEmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
