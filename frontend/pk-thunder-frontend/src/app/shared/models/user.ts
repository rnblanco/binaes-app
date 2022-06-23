export interface User {
	AREA?:          any[];
	PRESTAMO?:      any[];
	ROLUSUARIO:    Rolusuario;
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

export interface Rolusuario {
	id_rolUsuario: number;
	rol:           string;
}