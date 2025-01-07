import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  // Bueno, en este caso vamos a ser redireciones pero no usando el archivo de 
  // app.routes.ts (El Ruteador es un servicio) pero si usando su clase. Para hacer esto 
  // necesitamos instanciar la clase, pero en angular no es necesario construir esta instancia,
  // con la linea de abajo ya queda instanciada la clase y podemos usar el servicio de ruteo. 
  router = inject(Router); // A esto se le conoce como Inyeccion de Dependencias

  guardarCambios(){
    // Asi es la sintaxis para usar el servicio de ruteo
    // Redirige al usuario a la ruta '/generos' utilizando el servicio de ruteo de Angular.
    this.router.navigate(['/generos'])
  }

}
