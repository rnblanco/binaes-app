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
	PISOAREA:    Pisoarea;
	USUARIO:     Usuario;
	TIPOAREA:    Tipoarea;
}

export interface Pisoarea {
	id_pisoArea: number;
	pisoArea1:   string;
}

export interface Tipoarea {
	id_tipoArea: number;
	tipoArea1:   string;
}