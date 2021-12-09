import { Component, OnInit } from '@angular/core';
import { CARROS } from 'src/app/carros/mock-carros';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  carrosDestacados = CARROS.filter(e => e.destacado == true);

  constructor() { }

  ngOnInit(): void {
  }

}
