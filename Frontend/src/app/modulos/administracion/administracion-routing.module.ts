import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarVehiculosComponent } from './vehiculos/buscar-vehiculos/buscar-vehiculos.component';
import { CrearVehiculosComponent } from './vehiculos/crear-vehiculos/crear-vehiculos.component';
import { EditarVehiculosComponent } from './vehiculos/editar-vehiculos/editar-vehiculos.component';
import { EliminarVehiculosComponent } from './vehiculos/eliminar-vehiculos/eliminar-vehiculos.component';

const routes: Routes = [    

  {
    path: 'crear-vehiculo',
    component: CrearVehiculosComponent
  },
  {
  path: 'editar-vehiculo:id',
  component: EditarVehiculosComponent
  },
  {
    path: 'buscar-vehiculos',
    component: BuscarVehiculosComponent
  },
  {
    path: 'buscar-vehiculo',
    component: BuscarVehiculosComponent
  },
  {
    path: 'eliminar-vehiculo',
    component: EliminarVehiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }