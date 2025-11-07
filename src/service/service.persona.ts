import { Injectable } from "@angular/core";
import { Persona } from "../app/models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient){}
    getPersonas():Observable<any>{
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/"
        let reqest="api/personas"
        return this._http.get(urlApi+reqest);
    }
    getPersonasPromise():Promise<any>{
         let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/"
        let reqest="api/personas";
        let promise=new Promise((resolve)=>{
            this._http.get(urlApi+reqest).subscribe(response=>{
                resolve(response)
            })
        })
        return promise;
    }

}