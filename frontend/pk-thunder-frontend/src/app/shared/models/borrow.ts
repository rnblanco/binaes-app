export interface rawBorrow {
	id_Prestamo: number,
	fh_Prestamo: Date,
	fh_Devolucion: Date,
	id_Estado: number,
	id_usuarioPresta: number
	id_Ejemplar: number
}

export interface Borrow {
	id_Prestamo: number,
	fh_Prestamo: Date,
	fh_Devolucion: Date,
	estado: string,
	usuario: string, // usuario -> nombre
	ejemplar: string // prestamo -> ejemplar -> nombre
}

export interface rawBooking {
	id_Reserva: number,
	fh_Reserva: Date,
	id_Prestamo: number
}

export interface Booking {
	id_Reserva: number,
	fh_Reserva: Date,
	ejemplar: string // prestamo -> ejemplar -> nombre
}