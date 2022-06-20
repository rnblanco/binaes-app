export interface rawCollection {
	id_Collecion: number,
	nombre: string,
	id_tipoColeccion: number,
	id_generoColeccion: number,
	id_areaPertenece: number
}

export interface Collection {
	id_Collecion: number,
	nombre: string,
	tipoColeccion: string, // tipoColeccion -> tipoColeccion
	generoColeccion: string, // generoColeccion -> generoColeccion
	area: string // area -> nombre
}