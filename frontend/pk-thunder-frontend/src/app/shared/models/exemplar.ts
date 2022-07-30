import { Coleccion } from "./collection";
import { Meta } from "./pagination";

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
	id_p_clave: number;
	p_clave: string;
}

export interface P_ClavexEjemplar {
	id_pClaveEjemplar: number;
	EJEMPLAR: Ejemplar;
	P_CLAVE: P_Clave;
}

export interface Autor {
	id_Autor: number;
	nombre: string;
}

export interface AutorxEjemplar{
	id_autorEjemplar: number;
	AUTOR: Autor;
	EJEMPLAR: Ejemplar;
}

export interface EtiquetaxEjemplar {
	id_etiquetaEjemplar: number;
	id_tipoEtiqueta: number;
	id_Ejemplar: number;
	etiqueta: string;
	TIPOETIQUETA: TipoEtiqueta;
	EJEMPLAR: Ejemplar;
}

export interface TipoEtiqueta {
	id_tipoEtiqueta: number;
	tipoEtiqueta1: string;
}

export interface PaginadorEjemplar {
	data: Ejemplar[];
	meta: Meta;
}