import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GeneroCreacionDTO } from '../../generos/generos';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CarganadoComponent } from "../../compartidos/componentes/carganado/carganado.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent, MostrarErroresComponent, CarganadoComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {
  ngOnInit(): void {
    this.actoresService.obtenerPorId(this.idActor).subscribe(actor => {
      this.actor = actor;
    })
  }
  @Input({transform: numberAttribute})
  idActor! : number;

  actor?: ActorDTO;
  actoresService = inject(ActoresService);
  router = inject(Router)
  errores: string[] = [];

  


  guardarCambios(actor: ActorCreacionDTO){
    this.actoresService.actualizar(this.idActor, actor).subscribe({
      next: () => {
        this.router.navigate(['/actores']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
