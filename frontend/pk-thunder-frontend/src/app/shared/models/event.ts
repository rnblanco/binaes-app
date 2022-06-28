import { Meta } from './pagination';
import { Usuario } from './user';

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

export interface Area {
	id_Area:     number;
	nombre:      string;
	descripcion: string;
	capacidad: number;
	PISOAREA:    Pisoarea;
	USUARIO:     Usuario;
	TIPOAREA:    Tipoarea;
}

export interface Visita {
  id_Visita: number;
  USUARIO: Usuario;
  Area: Area;
  fh_entrada: Date,
  fh_salida: Date
}

export interface Pisoarea {
	id_pisoArea: number;
	pisoArea1:   string;
}

export interface Tipoarea {
	id_tipoArea: number;
	tipoArea1:   string;
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


