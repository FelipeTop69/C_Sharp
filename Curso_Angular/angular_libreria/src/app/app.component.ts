import { UpperCasePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
