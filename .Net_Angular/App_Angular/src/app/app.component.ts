import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastService } from './weatherforecast.service';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MenuComponent, RouterOutlet]
})
export class AppComponent {

}
