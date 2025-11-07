import { Component,OnInit } from '@angular/core';
import { ServicePersonas } from '../../service/service.persona';
import { Persona } from '../../models/persona';



@Component({
  selector: 'app-personas-stand-alone-component',
  standalone: true,
  templateUrl: './personas-stand-alone-component.html',
  styleUrl: './personas-stand-alone-component.css',
 providers:[ServicePersonas]
})
export class PersonasStandAloneComponent {
  public personas!:Array<Persona>
  constructor(private _service:ServicePersonas){}
ngOnInit(): void {
  // this._service.getPersonas().subscribe(response=>{
  //   console.log("leyendo")
  //   this.personas=response
  // })
  this._service.getPersonasPromise().then(response=>{
    console.log("reading")
    this.personas=response
  })
}

}
