import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    provideAnimationsAsync(),
    // Esto permite hace dinamico el mensaje de error de los fomularios para que no se solape(crear-generos.component.ts - Linea 35, crear-generos.component.css - Linea 5)
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}},
    // Importacion de libreria de js para manejar fechas: Uso en FormularioActoresComponent
    provideMomentDateAdapter({
      parse: {
        dateInput: ['DD-MM-YYYY']
      },
      display:{
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    })
  ]
};


