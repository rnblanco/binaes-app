import { Usuario } from './user';

export interface Area {
	id_Area:     number;
	nombre:      string;
	descripcion: string;
	capacidad:   number;
	PISOAREA:    Pisoarea;
	USUARIO:     Usuario;
	TIPOAREA:    Tipoarea;
}

export interface Pisoarea {
	id_pisoArea: number;
	pisoArea1:   string;
}

export interface Tipoarea {
	id_tipoArea: number;
	tipoArea1:   string;
}