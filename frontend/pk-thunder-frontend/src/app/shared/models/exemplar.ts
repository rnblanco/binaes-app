import { Coleccion } from './collection';

export interface Ejemplar {
	id_Ejemplar:     number;
	nombre:          string;
	imagen:          string;
	f_publicacion:   Date;
	COLECCION:       Coleccion;
	EDITORIAL:       Editorial;
	FORMATOEJEMPLAR: Formatoejemplar;
	IDIOMAEJEMPLAR:  Idiomaejemplar;
}

export interface Editorial {
	id_Editorial: number;
	editorial1:   string;
}

export interface Formatoejemplar {
	id_formatoEjemplar: number;
	formato:            string;
}

export interface Idiomaejemplar {
	id_idiomaEjemplar: number;
	idioma:            string;
}

export interface Estados {
	id_Estado: number;
	estado:    string;
}

export enum EstadosEnum {
	EN_PRESTAMO = 1,
	FINALIZADO = 2,
	RESERVADO = 3
}