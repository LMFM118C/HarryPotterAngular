import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../Environments/environment";
import { Observable } from "rxjs";
import { Personaje } from "../Models/personaje.model";

@Injectable({
    providedIn: 'root'
})
export class PersonajeService{
    private readonly http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}`;

    obtenerTodos(): Observable<Personaje[]>{
        return this.http.get<Personaje[]>(this.apiUrl);
    }
}