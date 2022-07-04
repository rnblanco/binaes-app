import { Meta } from './pagination';
import { Area } from './area';

export interface Objetivo {
	id_Objetivo?: 	number;
	Objetivo: 		string;
	EVENTO: 		Evento;
}

export interface Evento {
    id_Evento:       number;
    titulo:          string;
    imagen:          string;
    capacidad:       number;
    aprobado:        boolean;
    fh_Inicio:       Date;
    fh_Finalizacion: Date;
    AREA:            Area;
}

export interface PaginadorEvento {
	data: Evento[];
	meta: Meta;
}

export interface PaginadorArea {
	data: Area[];
	meta: Meta;
}

export const EventStatus = {
	FINALIZADO: false,
	EN_CURSO: true
}


