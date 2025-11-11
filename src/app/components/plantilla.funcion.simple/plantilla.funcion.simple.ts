import { Component, OnInit } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../service/service.plantillas';
@Component({

  selector: 'app-plantilla-funcion-simple',

  standalone: false,

  templateUrl: './plantilla.funcion.simple.html',

  styleUrl: './plantilla.funcion.simple.css'

})

// Componente para mostrar plantillas filtradas por función.
// Uso mejor de binding (ngModel) en lugar de ViewChild para evitar undefined.
export class PlantillaFuncionSimple implements OnInit {
  public funciones!: Array<string>;
  public plantillas: Array<Plantilla>;
  public selectedFuncion: string | null = null;
  constructor(private _service: ServicePlantillas) {
    this.plantillas = new Array<Plantilla>();

  }
  mostrarPlantilla(): void {
    const funcion = this.selectedFuncion;
    if (!funcion) { return; }
    this._service.getPlantillaFuncion(funcion).then(response => {
      this.plantillas = response;
    })

  }
  ngOnInit(): void {

    this._service.getFunciones().subscribe(response => {

      this.funciones = response;

    })

  }

} 
