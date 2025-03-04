import { Component, EventEmitter, inject, Output, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  @Input()
  // modelo: GeneroDTO | undefined;
  modelo?: GeneroDTO;

  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  private formBuilder = inject(FormBuilder); // Serivico para construir forms

  //Grupo de controles para los datos de form.
  //  Esto viene siendo como cuando se capturan los datos de un formulario en js (datos = new FormData(formulario)) 
  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula(), Validators.maxLength(50)]}]
  })

  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return "El campo nombre es requerido"
    }

    if(nombre.hasError('maxlength')){
      return `El campo nombre no puede tener mas de ${nombre.getError('maxlength').requiredLength} caracteres`
    }

    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

  guardarCambios(){
    if(!this.form.value){
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
