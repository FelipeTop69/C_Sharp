import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculasDTO, PeliculasCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';


@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id! : number;

  pelicula: PeliculasDTO = {id: 1, titulo: 'Spider-Man', trailer: 'URL', fechaLanzamiento: new Date(2020-0-25), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave:2, valor:'Accion'},
  ]

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Drama'},
    {llave:3, valor:'Comedia'},
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave:2, valor:'Cinemark'},
  ]

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Royal Films'},
    {llave:3, valor:'Cie Colombia'},
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    {id: 2, nombre: 'Daniel', personaje: 'X', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/220px-Zendaya_-_2019_by_Glenn_Francis.jpg'},
  ];

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('Editando la pelicula', pelicula)
  }

}
