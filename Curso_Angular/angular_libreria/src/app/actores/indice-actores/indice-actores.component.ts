import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { ActorDTO } from '../actores';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, ListadoGenericoComponent, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
    actoresService = inject(ActoresService)
    paginacion: PaginacionDTO = {pagina:1, recordsPorPagina: 5}
    cantidadTotalRegistros!: number;
    actores!: ActorDTO[];
    columnasAMostrar = ['id', 'nombre', 'acciones'];

    constructor(){
      this.cargarRegistros();
    }

    cargarRegistros(){
      this.actoresService.obtenerPaginado(this.paginacion).subscribe((respusta: HttpResponse<ActorDTO[]>) => {
        this.actores = respusta.body as ActorDTO[];
        const cabecera = respusta.headers.get("cantidad-total-registros") as string;
        this.cantidadTotalRegistros = parseInt(cabecera, 10);
      })
    }

    actualizarPaginacion(datos: PageEvent){
      this.paginacion = {pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize};
      this.cargarRegistros();
    }

    borrar(id: number){
      this.actoresService.borrar(id)
      .subscribe(() =>{
        this.paginacion.pagina = 1;
        this.cargarRegistros();
      })
    }
}
