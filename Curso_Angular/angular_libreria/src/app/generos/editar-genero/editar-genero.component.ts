import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroDTO, GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { CarganadoComponent } from "../../compartidos/componentes/carganado/carganado.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent, CarganadoComponent, MostrarErroresComponent],
  standalone: true,
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent implements OnInit{
  ngOnInit(): void {
    this.generosService.obtenerPorId(this.idGenero).subscribe(genero => {
      this.genero = genero;
    })
  }

  @Input({transform: numberAttribute})
  idGenero! : number;
  genero?: GeneroDTO
  generosService = inject(GenerosService);
  errores: string[] = [];
  router = inject(Router)

  guardarCambios(genero: GeneroCreacionDTO){
    this.generosService.actualizar(this.idGenero, genero).subscribe({
      next: () => {
        this.router.navigate(['/generos']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }

}
