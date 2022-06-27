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

export interface P_Clave {
	id_p_Clave: number,
	p_clave: string,
  id_Ejemplar: number,
	 EJEMPLAR: Ejemplar
}

export interface Autor {
	id_Autor: number,
	nombre: string
}

export interface AutorxEjemplar{
	id_autorEjemplar: number
	AUTOR: Autor,
	EJEMPLAR: Ejemplar,
}

export interface EtiquetaxEjemplar {
	id_etiquetaEjemplar: number,
	id_tipoEtiqueta: number
	id_Ejemplar: number,
	etiqueta: string,
	TIPOETIQUETA: TipoEtiqueta,
	EJEMPLAR: Ejemplar
}

export interface TipoEtiqueta {
	id_tipoEtiqueta: number,
	tipoEtiqueta1: string
}

export enum BorrowStatus {
	EN_PRESTAMO = 1,
	FINALIZADO = 2,
	RESERVADO = 3
}

export enum TagType {
	ISBN = 1,
	ISSN = 2,
	DOI = 3,
}