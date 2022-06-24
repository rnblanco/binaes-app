import { Coleccion } from './collection';

export interface Exemplar {
  id_Ejemplar: number;
  nombre: string;
  imagen: string;
  EDITORIAL: Editorial;
  FORMATO: Formatoejemplar;
  IDIOMA: IdiomaEjemplar;
  f_publicacion: Date;
  COLECCION: Coleccion;
}

export interface Editorial {
  id_Editorial: number;
  editorial: string;
}

export interface Formatoejemplar {
  id_Formato: number;
  formato: string;
}

export interface IdiomaEjemplar {
  id_Idioma: number;
  idioma: string;
}
