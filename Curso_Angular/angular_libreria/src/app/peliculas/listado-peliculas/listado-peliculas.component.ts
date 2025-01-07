import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

/**Apuntes de Angular
 * Component: Es un decorador que se le pone a una clase para que se comporte como un componente de Angular
 * selector: Es el nombre que se le da al componente
 * templateUrl: Es la ruta del archivo html que se va a utilizar
 * styleUrls: Es la ruta del archivo css que se va a utilizar
 * 
 * Para que un componente funcione se debe importar en el archivo app.module.ts
 * 
 * - Uso de pipes: Los pipes son funciones que se utilizan para transformar datos en la vista
 *    - DatePipe: Se utiliza para formatear fechas
 *    - UpperCasePipe: Se utiliza para convertir un texto en mayusculas
 *    - CurrencyPipe: Se utiliza para formatear numeros a moneda
 * ------------------------------------------------------------------------------------------
 * - Uso de NgOptimizedImage: Es una libreria que se utiliza para optimizar las imagenes (Hace que solo se carguen las img que se ven en la pantalla)
 */

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  // Uso de pipes: Los yo son como funciones que puede recibir parametros y devolver un resultado
  // imports: [RouterOutlet, NgFor, NgIf],
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  // Parametros en componentes
  @Input({required:true})

  /**Se esta typenado el arreglo
   * !: Indica que el valor no va a ser nulo
   * any: Indica que el valor puede ser de cualquier tipo (Esto no es recomendable, se usa por el momento)
   */

  peliculas !: any[];

  agregarPelicula(){
    this.peliculas.push({
        titulo: 'La Roca',
        fechaLanzamiento: new Date(),
        precio: 29000.99,
        poster: ''
    })
  }

  removerPelicula(pelicula:any){
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo)
    this.peliculas.splice(indice, 1)
  }
  
}
