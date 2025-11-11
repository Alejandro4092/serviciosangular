import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../service/service.plantillas';

@Component({
  selector: 'app-plantilla.funcion.multiple',
  standalone: false,
  templateUrl: './plantilla.funcion.multiple.html',
  styleUrl: './plantilla.funcion.multiple.css',
})
export class PlantillaFuncionMultiple implements OnInit{
 public funciones!: Array<string>;
  public plantillas: Array<Plantilla>
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public funcionesSeleccionadas:Array<string>;
 constructor(private _service: ServicePlantillas) {
  this.plantillas=new Array<Plantilla>();
  this.funcionesSeleccionadas=new Array<string>();
 }

mostrarPlantilla():void{
  let aux= new Array<string>();
  for(var option of this.selectFunciones.nativeElement.options){
    if(option.selected==true){
      aux.push(option.value)
    }
  }
  this.funcionesSeleccionadas=aux
  this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe
  (response=>{
    this.plantillas=response;
  })
}

   ngOnInit(): void {

    this._service.getFunciones().subscribe(response => {

      this.funciones = response;

    })
}
}




