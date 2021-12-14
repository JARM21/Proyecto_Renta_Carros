import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-buscar-vehiculos',
  templateUrl: './buscar-vehiculos.component.html',
  styleUrls: ['./buscar-vehiculos.component.css']
})
export class BuscarVehiculosComponent implements OnInit {

  listadoRegistros: ModeloVehiculo[] = [];


  constructor(private vehiculoServicio: VehiculosService) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos();
  }

  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistros().subscribe((datos: ModeloVehiculo[]) => {
      this.listadoRegistros = datos;
    })
  }

}
