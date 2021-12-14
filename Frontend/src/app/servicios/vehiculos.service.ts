import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  url='http://127.0.0.1:3000';

  token:String='';

  constructor(private http:HttpClient, private seguiridadServicio: SeguridadService) { 
    this.token = this.seguiridadServicio.ObtenerToken(); 
  }

  ObtenerRegistros(): Observable<ModeloVehiculo[]> {
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculo`)
  }

  CrearVehiculo(vehiculo: ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculo`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  ActualizarVehiculo(vehiculo: ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculo`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  EliminarVehiculo(id: string):Observable<any>{
    return this.http.delete<ModeloVehiculo>(`${this.url}/vehiculo/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

