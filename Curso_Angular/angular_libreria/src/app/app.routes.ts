import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'generos', component: IndiceGenerosComponent},
    {path: 'generos/crear', component: CrearGenerosComponent},
    {path: 'generos/editar/:id', component: EditarGeneroComponent},
    {path: 'actores', component: IndiceActoresComponent},
    {path: 'actores/crear', component: CrearActorComponent},
    {path: 'cines', component: IndiceCinesComponent},
    {path: 'cines/crear', component: CrearCineComponent},
    {path: 'peliculas/crear', component: CrearPeliculaComponent},
];
