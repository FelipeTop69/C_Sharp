import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { ActorDTO, ActorCreacionDTO } from '../../actores/actores';
import { fechaNoFutura } from '../../compartidos/funciones/validaciones';
import { PeliculasCreacionDTO, PeliculasDTO } from '../peliculas';
import moment from 'moment';
import { SelectorMultipleComponent } from '../../compartidos/componentes/selector-multiple/selector-multiple.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { AutocompleteActoresComponent } from '../../actores/autocomplete-actores/autocomplete-actores.component';

@Component({
  selector: 'app-formulario-peliculas',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent, AutocompleteActoresComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  @Input({required: true})
  generosNoSeleccionados!: SelectorMultipleDTO[];
  
  @Input({required: true})
  generosSeleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  
  @Input({required: true})
  cinesSeleccionados!: SelectorMultipleDTO[];

  @Input()
  modelo?: PeliculasDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculasCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', {
      validators: [Validators.required]
    }],
    fechaLanzamiento: new FormControl < Date | null>(null, {
      validators: [Validators.required]
    }),
    trailer: '',
    poster: new FormControl < File | string | null > (null)
  })

  archivoSeleccionado(file: File){
    this.form.controls.poster.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid){
      return
    }

    const pelicula = this.form.value as PeliculasCreacionDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    if(typeof pelicula.poster === "string"){
      pelicula.poster = undefined;
    }

    const generosIds = this.generosSeleccionados.map(val => val.llave);
    pelicula.generosIds = generosIds;

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    pelicula.cinesIds = cinesIds;

    this.posteoFormulario.emit(pelicula);

  }

  obtenerErrorCampoTitulo(): string{
    let titulo = this.form.controls.titulo;

    if(titulo.hasError('required')){
      return "El campo titulo es requerido"
    }

    return "";
  }

  obtenerErrorCampoFechaLanzamiento(){
    let campo = this.form.controls.fechaLanzamiento;

    if(campo.hasError('required')){
      return "El campo fecha lanzamiento es requerido"
    }

    return "";
  }

}
