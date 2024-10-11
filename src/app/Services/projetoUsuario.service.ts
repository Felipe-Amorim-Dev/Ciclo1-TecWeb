import { Injectable } from "@angular/core";
import { environment } from "../../Environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@ Injectable ({
    providedIn : 'root'
})
export class ProjetoUsuarioService {
    
    constructor(
        private http : HttpClient
    ) {}
    
    getAllArquivos() : Observable<any[]> {
        return this.http.get<any>(`${environment.api}`)
    }
}