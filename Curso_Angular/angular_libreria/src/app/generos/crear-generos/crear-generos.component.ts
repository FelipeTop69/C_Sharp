import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  // imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  // Bueno, en este caso vamos a ser redireciones pero no usando el archivo de 
  // app.routes.ts (El Ruteador es un servicio) pero si usando su clase. Para hacer esto 
  // necesitamos instanciar la clase, pero en angular no es necesario construir esta instancia,
  // con la linea de abajo ya queda instanciada la clase y podemos usar el servicio de ruteo. 
  private router = inject(Router); // A esto se le conoce como Inyeccion de Dependencias para uso de servicios


  guardarCambios(genero: GeneroCreacionDTO){
    // Asi es la sintaxis para usar el servicio de ruteo
    // Redirige al usuario a la ruta '/generos' utilizando el servicio de ruteo de Angular.
    // this.router.navigate(['/generos'])

    console.log('Creando el genero', genero);

  }

}
