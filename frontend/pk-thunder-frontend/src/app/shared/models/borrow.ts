import { Usuario } from './user';
import { Ejemplar, Estados } from './exemplar';

export interface Prestamo {
	id_Prestamo:   number;
	fh_Prestamo:   Date;
	fh_Devolucion: Date;
	EJEMPLAR:      Ejemplar;
	ESTADOS:       Estados;
	USUARIO:       Usuario;
}
