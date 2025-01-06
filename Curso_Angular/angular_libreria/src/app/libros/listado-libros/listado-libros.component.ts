import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, PRECONNECT_CHECK_BLOCKLIST, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-listado-libros',
  standalone: true,
  // Uso de pipes: Los yo son como funciones que puede recibir parametros y devolver un resultado
  // imports: [RouterOutlet, NgFor, NgIf],
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() =>{
      this.libros = [
        {
          titulo: 'El señor de los anillos',
          autor: 'J.R.R. Tolkien',
          fecha: new Date(),
          precio: 29000.99,
          portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg'
        },
        {
          titulo: 'Harry Potter',
          autor: 'J.K. Rowling',
          fecha: new Date(),
          precio: 39000.99,
          portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c4/e9/c4e93e876288b4a0021a0cef47efc8bf.jpg'
        },
        {
          titulo: 'Cien años de soledad',
          autor: 'Gabriel García Márquez',
          fecha: new Date(),
          precio: 19000.99,
          portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/38/12/3812f54c9c10992f538ead2c95d775ed.jpg'
        },
        {
          titulo: 'El principito',
          autor: 'Antoine de Saint-Exupéry',
          fecha: new Date(),
          precio: 15000.99,
          portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/5f/03/5f031acab6bf15ab0fd53925bae84242.jpg',
        },
        {
          titulo: 'Don Quijote de la Mancha',
          autor: 'Miguel de Cervantes Saavedra',
          fecha: new Date(),
          precio: 25000.99,
          portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/c3/66/c366cb303f601feab745903494d99cfc.jpg',
        },
      ]
    },2000)
  }

  title = 'angular_libreria';

  /**Se esta typenado el arreglo
   * !: Indica que el valor no va a ser nulo
   * any: Indica que el valor puede ser de cualquier tipo (Esto no es recomendable, se usa por el momento)
   */
  libros !: any[];
}
