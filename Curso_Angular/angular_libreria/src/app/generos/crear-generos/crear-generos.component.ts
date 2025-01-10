import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  // imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent, MostrarErroresComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  
})
export class CrearGenerosComponent {
  // Bueno, en este caso vamos a ser redireciones pero no usando el archivo de 
  // app.routes.ts (El Ruteador es un servicio) pero si usando su clase. Para hacer esto 
  // necesitamos instanciar la clase, pero en angular no es necesario construir esta instancia,
  // con la linea de abajo ya queda instanciada la clase y podemos usar el servicio de ruteo. 
  private generosService = inject(GenerosService);
  errores: string[] = [];

}
