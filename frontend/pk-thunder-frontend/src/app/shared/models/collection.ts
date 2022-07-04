import { Meta } from './pagination';
import { Area } from './area';

export interface Coleccion {
	id_Coleccion:    number;
	nombre:          string;
	AREA:            Area;
	GENEROCOLECCION: Generocoleccion;
	TIPOCOLECCION:   Tipocoleccion;
}

export interface Generocoleccion {
	id_generoColeccion: number;
	generoColeccion1:   string;
}

export interface Tipocoleccion {
	id_tipoColeccion: number;
	tipoColeccion1:   string;
}

export interface PaginadorColeccion {
	data: Coleccion[];
	meta: Meta;
}

