export interface LoginReturnModel {
	usuario: User,
	token: string
}

export interface User {
	AREA?:          any[];
	PRESTAMO?:      any[];
	ROLUSUARIO:    RolUsuario;
	TOKEN:         any[];
	VISITAS?:       any[];
	id_Usuario:    string;
	nombre:        string;
	email:         string;
	telefono:      string;
	ocupacion:     string;
	direccion:     string;
	fotografia:    string;
	institucion:   string;
	id_rolUsuario?: number;
	contrasena?:    string;
	token?: string
}

export interface RolUsuario {
	id_rolUsuario: number;
	rol:           string;
}