import { Coleccion } from './collection';

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
