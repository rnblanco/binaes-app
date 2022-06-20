export interface rawEvent {
	id_Evento: number,
	titulo: string,
	imagen: number,
	capacidad: number,
	id_areaRealizacion: number,
	aprobado: boolean,
	fh_Inicio: Date,
	fh_Finalizacion: Date
}

export interface Event {
	id_Evento: number,
	titulo: string,
	imagen: number,
	capacidad: number,
	area: string, // area -> nombre
	aprobado: boolean,
	fh_Inicio: Date,
	fh_Finalizacion: Date
}