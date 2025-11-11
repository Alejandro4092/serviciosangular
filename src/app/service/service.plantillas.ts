import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/plantilla";
@Injectable()
export class ServicePlantillas{
constructor(private _http: HttpClient) {}

getFunciones():Observable<Array<string>>{
        let request = "/api/Plantilla/Funciones";
        let url = environment.urlApiPlantilla + request;
        return this._http.get<Array<string>>(url);
    }

    getPlantillaFuncion(funcion: string): Promise<Array <Plantilla>> {
        const request = "/api/Plantilla/plantillafuncion/"+funcion;
        const url = environment.urlApiPlantilla + request;
        const plantillas=
         fetch(url).then(response => response.json());
         return plantillas
    }

    getPlantillaFunciones(funciones: Array<string>):Observable<Array<Plantilla>>{
    let datos="";
    for(var funcion of funciones){
        datos+="funcion="+funcion+"&";
    }
    datos=datos.substring(0,datos.length-1);
    let request="api/plantilla/plantillafunciones?"+datos
    let url =environment.urlApiPlantilla+request;
    return this._http.get<Array<Plantilla>>(url);

    }


}
