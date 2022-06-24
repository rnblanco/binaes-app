import { Usuario } from './user';

export interface Coleccion {
	id_Coleccion?:    number;
	nombre:          string;
	AREA:            Area;
	GENEROCOLECCION: Generocoleccion;
	TIPOCOLECCION:   Tipocoleccion;
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

export interface Generocoleccion {
	id_generoColeccion: number;
	generoColeccion1:   string;
}

export interface Tipocoleccion {
	id_tipoColeccion: number;
	tipoColeccion1:   string;
}