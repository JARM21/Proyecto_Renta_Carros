import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearVehiculosComponent } from './vehiculos/crear-vehiculos/crear-vehiculos.component';
import { EditarVehiculosComponent } from './vehiculos/editar-vehiculos/editar-vehiculos.component';
import { EliminarVehiculosComponent } from './vehiculos/eliminar-vehiculos/eliminar-vehiculos.component';
import { BuscarVehiculosComponent } from './vehiculos/buscar-vehiculos/buscar-vehiculos.component';


@NgModule({
  declarations: [
    CrearVehiculosComponent,
    EditarVehiculosComponent,
    EliminarVehiculosComponent,
    BuscarVehiculosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
