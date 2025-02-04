import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {

}
