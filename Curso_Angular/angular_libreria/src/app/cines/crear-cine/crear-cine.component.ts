import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cine';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";

@Component({
  selector: 'app-crear-cine',
  standalone: true,
  imports: [FormularioCineComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  guardarCambios(cine: CineCreacionDTO){
    console.log('Creando el cine:', cine);
  }
}
