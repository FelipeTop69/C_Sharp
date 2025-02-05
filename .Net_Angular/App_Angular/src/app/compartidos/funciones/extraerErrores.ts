export function extraerErrores(obj: any): string[]{
    const err = obj.error.errors;

    let mensajesDeErrror: string[] = [];

    for(let llave in err){
        let campo = llave;
        const mensajeConCampos = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`)
        mensajesDeErrror = mensajesDeErrror.concat(mensajeConCampos);
    }

    return mensajesDeErrror
}