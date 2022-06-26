export interface rawExemplar {
	id_Ejemplar: number,
	nombre: string,
	imagen: number,
	id_Editorial: number,
	id_Formato: number,
	id_Idioma: number,
	f_publicacion: Date,
	id_coleccionPertenece: number
}

export interface Exemplar {
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

export enum EstadosEnum {
	EN_PRESTAMO = 1,
	FINALIZADO = 2,
	RESERVADO = 3
}