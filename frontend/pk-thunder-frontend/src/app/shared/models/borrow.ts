import { Usuario } from './user';
import { Ejemplar, Estados } from './exemplar';
import { Meta } from './pagination';

export interface Prestamo {
	id_Prestamo:   number;
	fh_Prestamo:   Date;
	fh_Devolucion: Date;
	EJEMPLAR:      Ejemplar;
	ESTADOS:       Estados;
	USUARIO:       Usuario;
}

export interface Reserva {
	id_Reserva: number,
	fh_Reserva: Date,
	id_Prestamo: string,
	PRESTAMO: Prestamo
}

export interface PaginadorPrestamo {
	data: Prestamo[];
	meta: Meta;
}

export interface PaginadorReserva {
	data: Prestamo[];
	meta: Meta;
}