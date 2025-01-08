import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO, CineDTO } from '../cine';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { Coordenada } from '../../compartidos/componentes/mapa/cordenada';

@Component({
  selector: 'app-formulario-cine',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MapaComponent],
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})
export class FormularioCineComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({latitud: this.modelo.latidud, longitud: this.modelo.longitud})
    }
  }

  @Input()
  modelo?: CineDTO;

  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  coordenadasIniciales: Coordenada[] = [];

  private formBuilder = inject(FormBuilder); // Serivico para construir forms
  
  form = this.formBuilder.group({
    nombre: ['', {validators:[Validators.required]}],
    latitud: new FormControl < number | null > (null, [Validators.required]),
    longitud: new FormControl < number | null > (null, [Validators.required])
  })

  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return "El campo nombre es requerido"
    }

    return "";
  }

  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }

  guardarCambios(){
    if(!this.form.value){
      return;
    }

    const genero = this.form.value as CineCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
