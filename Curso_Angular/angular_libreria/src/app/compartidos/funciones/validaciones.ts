import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaUsuario = <string>control.value;

        if (!fechaUsuario) return null;
        if(fechaUsuario.length === 0) return null;

        const primeraLetra = fechaUsuario[0];

        if(primeraLetra !== primeraLetra.toUpperCase()){
            return {
                primeraLetraMayuscula:{
                    mensaje: "La primera letra debe ser mayuscula"
                }
            }
        }

        return null;
    }
}

export function fechaNoFutura(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaUsuario = new Date(control.value);
        const diaActual = new Date();

        if (!fechaUsuario) return null;
        if(fechaUsuario > diaActual){
            return {
                fechaFutura:{
                    mensaje: "La fecha no puede ser del futuro"
                }
            }
        }

        return null;
    }
}