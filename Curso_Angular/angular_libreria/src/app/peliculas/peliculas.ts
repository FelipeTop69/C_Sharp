import { actorAutoCompleteDTO } from "../actores/actores";

export interface PeliculasDTO{
    id: number,
    titulo: string,
    fechaLanzamiento: Date,
    trailer: string,
    poster?: string,
}

export interface PeliculasCreacionDTO{
    titulo: string,
    fechaLanzamiento: Date,
    trailer: string,
    poster?: File,
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorAutoCompleteDTO[];
}