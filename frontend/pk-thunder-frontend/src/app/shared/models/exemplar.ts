import { Coleccion } from "./collection";

export interface Ejemplar {
  id_Ejemplar: number;
  nombre: string;
  imagen: string;
  EDITORIAL: Editorial;
  FORMATOEJEMPLAR: Formatoejemplar;
  IDIOMAEJEMPLAR: IdiomaEjemplar;
  f_publicacion: string;
  COLECCION: Coleccion;
}

export interface Editorial {
  id_Editorial: number;
  editorial1: string;
}

export interface Formatoejemplar {
  id_formatoEjemplar: number;
  formato: string;
}

export interface IdiomaEjemplar {
  id_idiomaEjemplar: number;
  idioma: string;
}

export interface Estados {
	id_Estado: number;
	estado:    string;
}

export enum BorrowStatus {
	EN_PRESTAMO = 1,
	FINALIZADO = 2,
	RESERVADO = 3
}

export enum EventStatus {
	FINALIZADO,
	EN_CURSO,
}