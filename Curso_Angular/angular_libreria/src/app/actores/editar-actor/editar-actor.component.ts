import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroCreacionDTO } from '../../generos/generos';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  idActor! : number;

  actor: ActorDTO = {id: 1, nombre: 'Comedia', fechaNacimiento: new Date(1999-0-25), foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg'}

  guardarCambios(actor: ActorCreacionDTO){
    console.log('Editando el actor', actor)
  }
}
