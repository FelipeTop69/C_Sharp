import { Component, inject, Input } from '@angular/core';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { IServicioCRUD } from '../../interfaces/IServiciosCRUD';
import { Router } from '@angular/router';
import { extraerErrores } from '../../funciones/extraerErrores';

@Component({
  selector: 'app-crear-entidad',
  imports: [],
  templateUrl: './crear-entidad.component.html',
  styleUrl: './crear-entidad.component.css'
})
export class CrearEntidadComponent<TDTO, TCreacionDTO>{
    @Input({required: true})
    titulo!: string
  
    @Input({required: true})
    rutaIndice!: string
  
    @Input({required: true})
    formulario: any

    errores: string[] = [];

    servicioCRUD = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>;
    private router = inject(Router); // A esto se le conoce como Inyeccion de Dependencias para uso de servicios


    guardarCambios(entidad: TCreacionDTO){
  
      this.servicioCRUD.crear(entidad).subscribe({
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
