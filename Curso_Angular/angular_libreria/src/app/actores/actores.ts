export interface ActorDTO {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    // Foto Leer
    foto?: string;
}


export interface ActorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    // Foto Crear
    foto?: File;
}

export interface actorAutoCompleteDTO {
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}


