import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Coche } from "../models/coche";


@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { }

    getCoches(): any {
        let reqest = "webresources/coches";
        let url = environment.urlApiCoches + reqest;
        fetch(url).then(response => {
            return response
        })
    }
    getCochesPromise(): Promise<any> {
        let request = "webresources/coches";
        let url = environment.urlApiCoches + request;
        let promise = new Promise((resolve) => {
            fetch(url).then(response => {
                resolve(response.json());
            })
        })
        return promise;

    }
}