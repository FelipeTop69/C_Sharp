import { Component } from '@angular/core';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { PeliculasCreacionDTO } from '../peliculas';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  standalone: true,
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO[] = []

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Drama'},
    {llave:2, valor:'Accion'},
    {llave:3, valor:'Comedia'},
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = []

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Royal Films'},
    {llave:2, valor:'Cinemark'},
    {llave:3, valor:'Cie Colombia'},
  ];

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('Creando la pelicula:', pelicula);
  }
}
