import { Component, inject, Input } from '@angular/core';
import { PaginacionDTO } from '../../modelos/PaginacionDTO';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IServicioCRUD } from '../../interfaces/IServiciosCRUD';

@Component({
  selector: 'app-indice-entidad',
  standalone: true,
  imports: [RouterLink, MatButtonModule, ListadoGenericoComponent, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css'
})
export class IndiceEntidadComponent<TDTO, TCreacionDTO> {
  @Input({required: true})
  titulo!: string

  @Input({required: true})
  rutaCrear!: string

  @Input({required: true})
  rutaEditar!: string

  @Input()
  columnasAMostrar = ['id', 'nombre', 'acciones']

  servicioCRUD = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>

  paginacion: PaginacionDTO = {pagina:1, recordsPorPagina: 5}
  cantidadTotalRegistros!: number;
  entidades!: TDTO[];

  constructor(){
    this.cargarRegistros();
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginacion = {pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize};
    this.cargarRegistros();
  }

  cargarRegistros(){
    this.servicioCRUD.obtenerPaginado(this.paginacion).subscribe((respusta: HttpResponse<TDTO[]>) => {
      this.entidades = respusta.body as TDTO[];
      const cabecera = respusta.headers.get("cantidad-total-registros") as string;
      this.cantidadTotalRegistros = parseInt(cabecera, 10);
    })
  }

  borrar(id: number){
    this.servicioCRUD.borrar(id)
    .subscribe(() =>{
      this.paginacion.pagina = 1;
      this.cargarRegistros();
    })
  }
}
