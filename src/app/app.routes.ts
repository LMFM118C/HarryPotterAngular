import { Routes } from '@angular/router';

export const routes: Routes = [{
        path: '',
        loadComponent: () => import('./Pages/personajes/personaje.component').
            then((p)=>p.PersonajesComponent),
    }
];
