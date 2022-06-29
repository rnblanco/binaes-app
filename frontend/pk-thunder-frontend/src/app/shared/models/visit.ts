import { Meta } from "./pagination";
import { Area } from './event';
import { Usuario } from "./user";

export interface Visita {
    id_Visita: number;
    USUARIO: Usuario;
    AREA: Area;
    fh_entrada: Date,
    fh_salida: Date,
}

export interface HorarioXArea {
    id_Horario: number,
    horarioAbierto: Date,
    horarioCierre: Date,
}


export interface PaginadorVisita {
	data: Visita[];
	meta: Meta;
}

  