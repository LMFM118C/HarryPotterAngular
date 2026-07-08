import { CommonModule } from "@angular/common"
import { Component, inject, signal } from "@angular/core"
import { PersonajeService } from "../../Services/personaje.service"
import { Personaje } from "../../Models/personaje.model";

@Component({
    selector: 'app-personajes.components',
    imports: [CommonModule],
    templateUrl: './personaje.component.html',
    styleUrl: './personaje.component.css',
})
export class PersonajesComponent{
    private service = inject(PersonajeService);

    personajes = signal<Personaje[]>([]);

    constructor(){
        this.cargar();
    }

    cargar(){
        this.service.obtenerTodos().subscribe((data)=>{
            this.personajes.set(data);
        })
    }
}