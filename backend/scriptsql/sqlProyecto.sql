CREATE DATABASE binaes;
GO
USE binaes;

--CREACION TABLAS--

CREATE TABLE USUARIO(
    id_Usuario VARCHAR(8) NOT NULL,     -- pk
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) 
        NOT NULL 
		UNIQUE
		CHECK(email LIKE '%@%'),
    telefono CHAR(12) 
		NOT NULL 
		UNIQUE
		CHECK(telefono LIKE '+503[2|6|7][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    ocupacion VARCHAR(15) NOT NULL,
    direccion VARCHAR(100) NOT NULL 
		DEFAULT 'Dirección no disponible',
    fotografia VARBINARY(MAX) NOT NULL,
    institucion VARCHAR(50) NOT NULL,
    id_rolUsuario INT 
        NOT NULL
        DEFAULT 0,                     -- fk
    contrasena VARBINARY(256) NOT NULL
);

CREATE TABLE TOKEN(
    id_Token INT NOT NULL IDENTITY(1,1),
    TOKEN BINARY(64) NOT NULL,
    id_Usuario VARCHAR(8) NOT NULL,     --fk
    fh_Expiracion DATETIME NOT NULL
);

CREATE TABLE ROLUSUARIO(
    id_rolUsuario INT NOT NULL IDENTITY(1,1),-- pk
    rol VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE VISITAS(
    id_Visita INT NOT NULL IDENTITY(1,1),-- pk
    id_Usuario VARCHAR(8) NOT NULL,     -- fk
    id_Area INT NOT NULL,               -- fk
    fh_entrada DATETIME NOT NULL,
    fh_salida DATETIME NULL
);

CREATE TABLE AREA(
    id_Area INT NOT NULL IDENTITY(1,1), -- pk
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    capacidad INT NOT NULL DEFAULT 0,
    id_tipoArea INT NOT NULL,           -- fk
    responsable VARCHAR(8) 
        NOT NULL 
        DEFAULT '00000000',             -- fk
    id_pisoArea INT NOT NULL,           -- fk
);

CREATE TABLE HORARIOxAREA(
    id_Horario INT NOT NULL IDENTITY(1,1),-- pk
    horaAbierto TIME NOT NULL,
    horaCierre  TIME NOT NULL,
    id_Area INT NOT NULL                -- fk
);

CREATE TABLE TIPOAREA(
    id_tipoArea INT NOT NULL IDENTITY(1,1),-- pk
    tipoArea VARCHAR(30)                -- fk
);

CREATE TABLE PISOAREA(
    id_pisoArea INT NOT NULL IDENTITY(1,1),-- pk
    pisoArea VARCHAR(10)
);

CREATE TABLE EVENTO(
    id_Evento INT NOT NULL IDENTITY(1,1),-- pk
    titulo VARCHAR(100) NOT NULL,
    imagen VARBINARY(MAX) NOT NULL,
    capacidad INT NOT NULL,
    id_areaRealizacion INT NOT NULL,    -- fk
    aprobado BIT NOT NULL,
    fh_Inicio DATETIME NOT NULL,
    fh_Finalizacion DATETIME NOT NULL
);

CREATE TABLE OBJETIVOSxEVENTO(
    id_Objetivo INT NOT NULL IDENTITY(1,1),-- pk
    Objetivo TEXT NOT NULL,
    id_Evento INT NOT NULL              -- fk
);

CREATE TABLE PRESTAMO (
    id_Prestamo INT NOT NULL IDENTITY(1,1),-- pk
    fh_Prestamo DATETIME NOT NULL,
    fh_Devolucion DATETIME NOT NULL,
    id_Estado INT NOT NULL,              -- fk
    id_usuarioPresta VARCHAR(8) NOT NULL,-- fk
    id_Ejemplar INT NOT NULL             -- fk
);

CREATE TABLE RESERVA (
    id_Reserva INT NOT NULL IDENTITY(1,1),-- pk
    fh_Reserva DATETIME NOT NULL,
    id_Prestamo INT NOT NULL            -- fk
);

CREATE TABLE ESTADOS (
    id_Estado INT NOT NULL IDENTITY(1,1),-- pk
    estado VARCHAR(20) NOT NULL,
);

CREATE TABLE EJEMPLAR (
    id_Ejemplar INT NOT NULL IDENTITY(1,1),-- pk
    nombre VARCHAR(100) NOT NULL,
    imagen VARBINARY(MAX) NOT NULL,
    id_Editorial INT NOT NULL,          -- fk
    id_Formato INT NOT NULL,            -- fk
    id_Idioma INT NOT NULL,             -- fk
    f_publicacion DATE NOT NULL,
    id_coleccionPertenece INT NOT NULL  -- fk
);

CREATE TABLE AUTORxEJEMPLAR (
    id_autorEjemplar INT NOT NULL IDENTITY(1,1),-- pk
    id_Autor INT NOT NULL,              -- fk
    id_Ejemplar INT NOT NULL            -- fk
);

CREATE TABLE AUTOR (
    id_Autor INT NOT NULL IDENTITY(1,1),
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE P_CLAVExEJEMPLAR (
    id_p_Clave INT NOT NULL IDENTITY(1,1),-- pk
    p_clave VARCHAR(30) NOT NULL,
    id_Ejemplar INT NOT NULL              -- fk
);

CREATE TABLE ETIQUETASxEJEMPLAR (
    id_etiquetaEjemplar INT NOT NULL IDENTITY(1,1),-- pk
    id_tipoEtiqueta INT NOT NULL,        -- fk
    id_Ejemplar INT NOT NULL,            -- fk
    etiqueta VARCHAR(200) NOT NULL
);

CREATE TABLE TIPOETIQUETA (
    id_tipoEtiqueta INT NOT NULL IDENTITY(1,1),-- pk
    tipoEtiqueta VARCHAR(4) NOT NULL
);

CREATE TABLE EDITORIAL (
    id_Editorial INT NOT NULL IDENTITY(1,1),-- pk
    editorial VARCHAR(60) NOT NULL
);

CREATE TABLE FORMATOEJEMPLAR (
    id_formatoEjemplar INT NOT NULL IDENTITY(1,1),-- pk
    formato VARCHAR(30) NOT NULL  
);

CREATE TABLE IDIOMAEJEMPLAR (
    id_idiomaEjemplar INT NOT NULL IDENTITY(1,1),-- pk
    idioma VARCHAR(30) NOT NULL
);

CREATE TABLE COLECCION (
    id_Coleccion INT NOT NULL IDENTITY(1,1),    -- pk
    nombre VARCHAR(50) NOT NULL,
    id_tipoColeccion INT NOT NULL,              -- fk
    id_generoColeccion INT NOT NULL,            -- fk
    id_areaPertenece INT NOT NULL DEFAULT 0     -- fk
);

CREATE TABLE TIPOCOLECCION (
    id_tipoColeccion INT NOT NULL IDENTITY(1,1),-- pk
    tipoColeccion VARCHAR(30)
);

CREATE TABLE GENEROCOLECCION (
    id_generoColeccion INT NOT NULL IDENTITY(1,1),-- pk
    generoColeccion VARCHAR(30) NOT NULL
);

--AGREGANDO PKs y FKs TABLAS--

ALTER TABLE ROLUSUARIO ADD
    CONSTRAINT pk_rolUsuario
        PRIMARY KEY(id_rolUsuario);

ALTER TABLE USUARIO ADD 
    CONSTRAINT pk_usuario
        PRIMARY KEY (id_Usuario),
    CONSTRAINT fk_usuario_rolUsuario
        FOREIGN KEY (id_rolUsuario) 
        REFERENCES ROLUSUARIO (id_rolUsuario)
            ON DELETE SET DEFAULT
            ON UPDATE CASCADE;

ALTER TABLE TOKEN ADD 
    CONSTRAINT pk_token
        PRIMARY KEY (id_Token),
    CONSTRAINT fk_token_usuario
        FOREIGN KEY (id_Usuario)
        REFERENCES USUARIO (id_Usuario)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE TIPOAREA ADD
    CONSTRAINT pk_tipoArea
        PRIMARY KEY (id_tipoArea);

ALTER TABLE PISOAREA ADD
    CONSTRAINT pk_pisoArea
        PRIMARY KEY (id_pisoArea);

ALTER TABLE AREA ADD
    CONSTRAINT pk_area
        PRIMARY KEY (id_Area),
    CONSTRAINT fk_area_tipoArea
        FOREIGN KEY (id_tipoArea)
        REFERENCES TIPOAREA (id_tipoArea)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_area_responsable
        FOREIGN KEY (responsable)
        REFERENCES USUARIO (id_Usuario)
            ON DELETE SET DEFAULT
            ON UPDATE CASCADE,
    CONSTRAINT fk_area_pisoArea
        FOREIGN KEY (id_pisoArea)
        REFERENCES PISOAREA (id_pisoArea)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE HORARIOxAREA ADD
    CONSTRAINT pk_horarioxarea
        PRIMARY KEY (id_Horario),
    CONSTRAINT fk_horarioxarea_area
        FOREIGN KEY (id_Area)
        REFERENCES AREA (id_Area)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE VISITAS ADD
    CONSTRAINT pk_visitas
        PRIMARY KEY (id_Visita),
    CONSTRAINT fk_visitas_usuario
        FOREIGN KEY (id_Usuario)
        REFERENCES USUARIO (id_Usuario)
            ON DELETE NO ACTION
	        ON UPDATE CASCADE,
    CONSTRAINT fk_visitas_area
        FOREIGN KEY (id_Area)
        REFERENCES AREA (id_Area)
            ON DELETE NO ACTION
	        ON UPDATE NO ACTION;

ALTER TABLE EVENTO ADD
    CONSTRAINT pk_evento
        PRIMARY KEY (id_Evento),
    CONSTRAINT fk_evento_areaRealizacion
        FOREIGN KEY (id_areaRealizacion)
        REFERENCES AREA (id_Area)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE OBJETIVOSxEVENTO ADD
    CONSTRAINT pk_objetivosxarea
        PRIMARY KEY (id_Objetivo),
    CONSTRAINT fk_objetivosxarea_evento
        FOREIGN KEY (id_Evento)
        REFERENCES EVENTO (id_Evento)
            ON DELETE CASCADE
            ON UPDATE CASCADE;


ALTER TABLE TIPOCOLECCION ADD 
    CONSTRAINT pk_tipoColeccion
        PRIMARY KEY (id_tipoColeccion);
    
ALTER TABLE GENEROCOLECCION ADD
    CONSTRAINT pk_generoColeccion
        PRIMARY KEY (id_generoColeccion);

ALTER TABLE COLECCION ADD
    CONSTRAINT pk_Coleccion
        PRIMARY KEY (id_Coleccion),
    CONSTRAINT fk_coleccion_tipoColeccion
        FOREIGN KEY (id_tipoColeccion)
        REFERENCES TIPOCOLECCION (id_tipoColeccion)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_coleccion_generoColeccion
        FOREIGN KEY (id_generoColeccion)
        REFERENCES GENEROCOLECCION (id_generoColeccion)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_coleccion_area
        FOREIGN KEY (id_areaPertenece)
        REFERENCES AREA (id_Area)
            ON DELETE SET DEFAULT
            ON UPDATE CASCADE;

ALTER TABLE AUTOR ADD
    CONSTRAINT pk_Autor
        PRIMARY KEY (id_Autor);

ALTER TABLE TIPOETIQUETA ADD
    CONSTRAINT pk_tipoEtiqueta
        PRIMARY KEY (id_tipoEtiqueta);

ALTER TABLE EDITORIAL ADD
    CONSTRAINT pk_Editorial
        PRIMARY KEY (id_Editorial);

ALTER TABLE FORMATOEJEMPLAR ADD
    CONSTRAINT pk_formatoEjemplar
        PRIMARY KEY (id_formatoEjemplar);

ALTER TABLE IDIOMAEJEMPLAR ADD
    CONSTRAINT pk_idiomaEjemplar
        PRIMARY KEY (id_idiomaEjemplar);

ALTER TABLE EJEMPLAR ADD
    CONSTRAINT pk_Ejemplar
        PRIMARY KEY (id_Ejemplar),
    CONSTRAINT fk_ejemplar_editorial
        FOREIGN KEY (id_Editorial)
        REFERENCES EDITORIAL (id_Editorial)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_ejemplar_formato
        FOREIGN KEY (id_Formato)
        REFERENCES FORMATOEJEMPLAR (id_formatoEjemplar)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_ejemplar_idioma
        FOREIGN KEY (id_Idioma)
        REFERENCES IDIOMAEJEMPLAR (id_idiomaEjemplar)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_ejemplar_coleccion
        FOREIGN KEY (id_coleccionPertenece)
        REFERENCES COLECCION (id_Coleccion)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE AUTORxEJEMPLAR ADD
    CONSTRAINT pk_autorxejemplar
        PRIMARY KEY (id_autorEjemplar),
    CONSTRAINT fk_autorxejemplar_autor
        FOREIGN KEY (id_Autor)
        REFERENCES AUTOR (id_Autor)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT fk_autorxejemplar_ejemplar
        FOREIGN KEY (id_Ejemplar)
        REFERENCES EJEMPLAR (id_Ejemplar)
            ON DELETE NO ACTION
            ON UPDATE CASCADE;

ALTER TABLE P_CLAVExEJEMPLAR ADD
    CONSTRAINT pk_clavexejemplar
        PRIMARY KEY (id_p_Clave),
    CONSTRAINT fk_clavexejemplar_ejemplar
        FOREIGN KEY (id_Ejemplar)
        REFERENCES EJEMPLAR (id_Ejemplar)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE ESTADOS ADD
    CONSTRAINT pk_Estado
        PRIMARY KEY (id_Estado);

ALTER TABLE PRESTAMO ADD
    CONSTRAINT pk_Prestamo
        PRIMARY KEY (id_Prestamo),
    CONSTRAINT fk_prestamo_estado
        FOREIGN KEY (id_Estado)
        REFERENCES ESTADOS (id_Estado)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_prestamo_usuario
        FOREIGN KEY (id_usuarioPresta)
        REFERENCES USUARIO (id_Usuario)
            ON DELETE NO ACTION
            ON UPDATE CASCADE,
    CONSTRAINT fk_prestamo_ejemplar
        FOREIGN KEY (id_Ejemplar)
        REFERENCES EJEMPLAR (id_Ejemplar)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;

ALTER TABLE RESERVA ADD
    CONSTRAINT pk_Reserva
        PRIMARY KEY (id_Reserva),
    CONSTRAINT fk_reserva_prestamo
        FOREIGN KEY (id_Prestamo)
        REFERENCES PRESTAMO (id_Prestamo)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

ALTER TABLE ETIQUETASxEJEMPLAR ADD
    CONSTRAINT pk_etiquetasxejemplar
        PRIMARY KEY (id_etiquetaEjemplar),
    CONSTRAINT fk_etiquetasxejemplar_tipoEtiqueta
        FOREIGN KEY (id_tipoEtiqueta)
        REFERENCES TIPOETIQUETA (id_tipoEtiqueta)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT fk_etiquetasxejemplar_ejemplar
        FOREIGN KEY (id_Ejemplar)
        REFERENCES EJEMPLAR (id_Ejemplar)
            ON DELETE CASCADE
            ON UPDATE CASCADE;

--AGREGANDO DATOS PRUEBA--

INSERT INTO TIPOAREA (tipoArea) VALUES ('Salón lúdico');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Auditórium');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Sala de proyección');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Área de computación');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Área de promoción de inclusión');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Sala de investigación');
INSERT INTO TIPOAREA (tipoArea) VALUES ('Área de biblioteca');

INSERT INTO PISOAREA (pisoArea) VALUES ('Piso 1');
INSERT INTO PISOAREA (pisoArea) VALUES ('Piso 2');
INSERT INTO PISOAREA (pisoArea) VALUES ('Piso 3');
INSERT INTO PISOAREA (pisoArea) VALUES ('Piso 4');

INSERT INTO AREA (nombre, descripcion, id_tipoArea, responsable, id_pisoArea)
VALUES ('Auditórium Juventud', 
        'El Auditórium Juventud impulsa a los jóvenes a interactuar con el medio que les rodea y salir de su zona de comfort.',
        2, 1, 1);

INSERT INTO AREA (nombre, descripcion, id_tipoArea, responsable, id_pisoArea)
VALUES ('Biblioteca Enigma', 
        'La Biblioteca Enigma ofrece un área de concentración y estudio para los ciudadanos.',
        7, 1, 2);

INSERT INTO ESTADOS (estado) VALUES ('En ejecución');
INSERT INTO ESTADOS (estado) VALUES ('Finalizado');
INSERT INTO ESTADOS (estado) VALUES ('Reservado');

INSERT INTO TIPOCOLECCION (tipoColeccion) VALUES ('Libro');
INSERT INTO TIPOCOLECCION (tipoColeccion) VALUES ('Audio');

INSERT INTO GENEROCOLECCION (generoColeccion) VALUES ('Investigación');
INSERT INTO GENEROCOLECCION (generoColeccion) VALUES ('Autobiografía');
INSERT INTO GENEROCOLECCION (generoColeccion) VALUES ('Misterio');

INSERT INTO EDITORIAL (editorial) VALUES ('RBA Libros');

INSERT INTO FORMATOEJEMPLAR (formato) VALUES ('Digital');
INSERT INTO FORMATOEJEMPLAR (formato) VALUES ('Físico');

INSERT INTO IDIOMAEJEMPLAR (idioma) VALUES ('Español');

INSERT INTO TIPOETIQUETA (tipoEtiqueta) VALUES ('isbn');
INSERT INTO TIPOETIQUETA (tipoEtiqueta) VALUES ('issn');
INSERT INTO TIPOETIQUETA (tipoEtiqueta) VALUES ('doi');

INSERT INTO ETIQUETASxEJEMPLAR (id_tipoEtiqueta, id_Ejemplar, etiqueta) VALUES (1, 1, '9788491877004');

INSERT INTO AUTOR (nombre) VALUES ('Arthur Conan Doyle');

INSERT INTO AUTORxEJEMPLAR (id_Autor, id_Ejemplar) VALUES (1, 1);

INSERT INTO COLECCION (nombre, id_tipoColeccion, id_generoColeccion, id_areaPertenece)
VALUES ('The Sherlock Holmes Collection', 1, 3, 2)

INSERT INTO EJEMPLAR (nombre, imagen, id_Editorial, id_Formato, id_Idioma, f_publicacion, id_coleccionPertenece)
VALUES ('The Sherlock Holmes Collection: El sabueso de los Baskerville',
        CAST('https://imagessl4.casadellibro.com/a/l/t5/04/9788491877004.jpg' AS VARBINARY(MAX)),
        1, 2, 1, '2022-03-03', 1)

INSERT INTO PRESTAMO (fh_Prestamo, fh_Devolucion, id_Estado, id_usuarioPresta, id_Ejemplar)
VALUES ('2022-06-21 00:00:00.000', '2022-07-06 00:00:00.000', 1, 1, 1);

INSERT INTO RESERVA (fh_Reserva, id_Prestamo) VALUES ('2022-07-07 00:00:00.000', 1);