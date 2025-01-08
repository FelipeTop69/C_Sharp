import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cine';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  idCine! : number; 
  cine: CineDTO = {id: 1, nombre: 'Royal Fimls', latidud: 2.9526126345461594, longitud: -75.28647076472994}

  guardarCambios(cine: CineCreacionDTO){
    console.log('Editando el cine', cine)
  }
} 
