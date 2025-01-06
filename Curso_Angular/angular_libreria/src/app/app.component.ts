import { UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';
import { ListadoLibrosComponent } from "./libros/listado-libros/listado-libros.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  imports: [UpperCasePipe, ListadoLibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_libreria'
}
