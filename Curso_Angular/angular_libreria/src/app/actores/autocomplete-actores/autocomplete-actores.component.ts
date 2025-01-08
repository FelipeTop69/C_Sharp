import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { actorAutoCompleteDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatTableModule, MatIconModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: actorAutoCompleteDTO[] = [
    {id: 1, nombre: 'Samuel', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Tom_Holland_at_KCA_2022.jpg'},
    {id: 2, nombre: 'Daniel', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/220px-Zendaya_-_2019_by_Glenn_Francis.jpg'},
    {id: 3, nombre: 'Felipe', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg/200px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg'},
  ]

  actoresSeleccionados: actorAutoCompleteDTO[] = []

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<actorAutoCompleteDTO>

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if (this.table != undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor: actorAutoCompleteDTO){
    const indice = this.actoresSeleccionados.findIndex((a: actorAutoCompleteDTO) => a.id === actor.id);
    this.actoresSeleccionados.splice(indice, 1)
    this.table.renderRows();
  }
}
