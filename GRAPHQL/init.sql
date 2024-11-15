CREATE TABLE IF NOT EXISTS alumnos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);

INSERT INTO alumnos (nombre, apellido) VALUES
('Mario', 'Barrera'),
('Nicolás', 'Escaroz'),
('Arcadio', 'Ceja');