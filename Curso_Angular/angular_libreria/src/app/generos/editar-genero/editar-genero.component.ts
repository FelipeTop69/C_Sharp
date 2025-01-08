import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroDTO, GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  standalone: true,
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  @Input({transform: numberAttribute})
  idGenero! : number;

  genero: GeneroDTO = {id: 1, nombre: 'Comedia'}

  guardarCambios(genero: GeneroCreacionDTO){
    console.log('Editando el genero', genero)
  }

}
