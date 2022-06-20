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
	id_Ejemplar: number,
	nombre: string,
	imagen: number,
	editorial: string, // editorial -> editorial
	formato: string, // formato -> formato
	idioma: string, // idioma -> idioma
	f_publicacion: Date,
	coleccion: string
}