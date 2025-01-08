import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";
import { ObjectUnsubscribedError } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  @Input()
  modelo?: ActorDTO;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required]
    }],
    fechaNacimiento: new FormControl < Date | null > (null, {
      validators: [Validators.required, fechaNoFutura()]
    }),
    foto: new FormControl < File | string | null > (null)
  })

  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return "El campo nombre es requerido"
    }

    return "";
  }

  obtenerErrorCampoFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;

    if(campo.hasError('required')){
      return "El campo fecha nacimiento es requerido"
    }

    if(campo.hasError('fechaFutura')){
      return campo.getError('fechaFutura').mensaje;
    }

    return "";
  }

  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid){
      return
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();

    // Esto me valida si la foto actual es un String. En caso de que lo sea entonces quiere decir que la esta opteniendo
    // por lo que la foto existe, entonces es poco eficiente que si la foto ya existe vuelva a cargar este dato 
    // por lo que se define como undefined para que no lo cargue. Esto es para la funcion de editar 
    if(typeof actor.foto === "string"){
      actor.foto = undefined;
    }

    this.posteoFormulario.emit(actor);
  }

}
