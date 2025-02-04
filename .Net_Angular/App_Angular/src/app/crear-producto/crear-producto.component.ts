import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { LaptopCreacion } from '../laptop.models';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  private readonly formBuilder = inject(FormBuilder);
  laptopService = inject(LaptopService)
  router = inject(Router);

  form = this.formBuilder.group({
    nombre: [''], 
  })

  guardarCambios(){
    let laptop = this.form.value as LaptopCreacion
    this.laptopService.crear(laptop).subscribe(() =>{
      this.router.navigate(["productos"]);
    });
  }

}
