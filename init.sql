CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  precio DECIMAL(10,2)
);

INSERT INTO clientes (nombre) VALUES ('Maciel'), ('Carlos'), ('Lucía');
INSERT INTO productos (nombre, precio) VALUES ('Mouse', 50.00), ('Teclado', 70.00);
