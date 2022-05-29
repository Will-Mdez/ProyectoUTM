-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-05-2022 a las 04:43:23
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ProyectoUTM2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `idActividad` bigint(20) NOT NULL,
  `idProfesor` bigint(20) NOT NULL,
  `actividad` text NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `descripcion` text NOT NULL,
  `validado` tinyint(4) NOT NULL,
  `comprobante` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`idActividad`, `idProfesor`, `actividad`, `inicio`, `fin`, `descripcion`, `validado`, `comprobante`) VALUES
(2, 5, 'Editada Actividad', '2022-04-08', '2022-04-28', 'Editar', 1, 'Actividad Editada'),
(3, 4, 'Hola', '2022-05-01', '2022-05-05', 'Esto es una Prueba', 1, 'Comprobante'),
(4, 5, 'Calificaciones', '2022-04-09', '2022-04-20', 'Entregar Calificaciones', 1, 'Hola'),
(5, 17, 'Sebastian Vettel ', '2022-04-09', '2022-04-13', 'Actividad', 1, ''),
(6, 13, 'Win a Race', '2022-04-06', '2022-04-08', 'Win Miami Grand Prix', 1, 'yo lo vi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Articulos`
--

CREATE TABLE `Articulos` (
  `idarticulo` bigint(20) NOT NULL,
  `tipoCRL` text NOT NULL,
  `titulo` text NOT NULL,
  `nombreCRL` text NOT NULL,
  `tipoNI` text NOT NULL,
  `fechaedicion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carreras`
--

CREATE TABLE `Carreras` (
  `idCarrera` int(11) NOT NULL,
  `nombreCarrera` text NOT NULL,
  `siglaCarrera` text NOT NULL,
  `codigoCarrera` text NOT NULL,
  `idInstituto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Carreras`
--

INSERT INTO `Carreras` (`idCarrera`, `nombreCarrera`, `siglaCarrera`, `codigoCarrera`, `idInstituto`) VALUES
(1, 'Ingenieria Computacion', 'I.C', '802-A', 1),
(2, 'Ingenieria en Electronica', 'I.E.', '802-I.E.', 2),
(3, 'Licenciatura en Matematicas Aplicadas', 'L.M.A.', '802-L.M.A.', 3),
(4, 'Ingenieria en Mecatronica', 'I.M', '802-I.M', 2),
(5, 'Ingenieria en Fisica Aplicada', 'I.F.A', '802-I.F.A', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `idProfesor` bigint(20) DEFAULT NULL,
  `id` bigint(20) NOT NULL,
  `tipoEvento` text DEFAULT NULL,
  `nombreEvento` text DEFAULT NULL,
  `participacion` text DEFAULT NULL,
  `afectaLinea` text DEFAULT NULL,
  `tipoParticipacion` text DEFAULT NULL,
  `titulo` text DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `comprobante` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`idProfesor`, `id`, `tipoEvento`, `nombreEvento`, `participacion`, `afectaLinea`, `tipoParticipacion`, `titulo`, `inicio`, `fin`, `comprobante`) VALUES
(5, 2, 'Congreso', 'Prueba', 'Asistente', 'Si', 'Asistente', 'Prueba', '2022-05-03', '2022-05-03', 'hola'),
(5, 3, 'Congreso', 'Prueba 3 may 2237', 'Asistente', 'SI', 'Nacional', '', '2022-04-15', '2022-04-13', ''),
(4, 4, 'Seminario', 'Prueba Evento', 'Asistente', 'Si', 'Nacional', 'Prueba', '2022-05-02', '2022-05-07', 'Hola'),
(17, 5, 'Congreso', 'Prueba Vettle', 'Asistente', 'SI', 'Nacional', '', '2022-04-03', '2022-04-20', ''),
(12, 6, 'Curso', 'Champioon', 'Asistente', 'SI', 'Internacional', 'be a Word Champion', '2022-02-05', '2022-11-20', 'Mexico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Institutos`
--

CREATE TABLE `Institutos` (
  `idInstitutos` int(11) NOT NULL,
  `nombreInstituto` text NOT NULL,
  `siglasInstituto` text NOT NULL,
  `codigoCarrera` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Institutos`
--

INSERT INTO `Institutos` (`idInstitutos`, `nombreInstituto`, `siglasInstituto`, `codigoCarrera`) VALUES
(1, 'Instituto Computacion', 'I.I.C.', 'I.C.802-A'),
(2, 'Intituto de Electronica y Mecatronica', 'I.E.M.', '802-I.E.M.'),
(3, 'Instituto de Fisica y Matematicas', 'I.F.M.', '802-I.F.M.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Profesores`
--

CREATE TABLE `Profesores` (
  `idProfesor` int(11) NOT NULL,
  `nombreProfesor` text NOT NULL,
  `apellidoPaterno` text NOT NULL,
  `apellidoMaterno` text NOT NULL,
  `grado` text NOT NULL,
  `idInstituto` int(11) NOT NULL,
  `idCarrera` int(11) NOT NULL,
  `rol` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Profesores`
--

INSERT INTO `Profesores` (`idProfesor`, `nombreProfesor`, `apellidoPaterno`, `apellidoMaterno`, `grado`, `idInstituto`, `idCarrera`, `rol`) VALUES
(0, 'William MG', '', '', '', 1, 1, 'Director Instituto'),
(1, 'Modesto', 'Seara', 'Vazquez', 'Dr', 1, 1, 'Vicerector'),
(2, 'Jorge Arturo', 'Hernandez', 'Perales', 'Ingeniero', 1, 1, 'Profesor'),
(3, 'Felipe', 'Santiago', 'Espinoza', 'M.C.', 2, 2, 'Profesor'),
(4, 'Cuauhtemoc Hector', 'Castaneda', 'Roldan', 'Doctor', 3, 3, 'Profesor'),
(5, 'Erik German', 'Ramos', 'Perez', 'M.T.C.A.', 1, 1, 'Jefe Carrera'),
(10, 'Prueba ', 'Actualizacion', 'Kotlin', 'Estudiante', 1, 1, 'Profesor'),
(12, 'Sergio \"Checo\"', 'Perez', '', 'No.1.', 1, 1, 'Profesor'),
(13, 'Max', 'Verstappen', 'RedBull', 'Champion', 1, 1, 'Profesor'),
(16, 'Prueba 7 may', 'Prueba', '7 Mayo', 'Dr.', 2, 2, 'Director Instituto'),
(17, 'Sebastian ', 'Vettel', 'AstonMartin', 'x4 Champion', 1, 1, 'Profesor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesorYarticulo`
--

CREATE TABLE `profesorYarticulo` (
  `idprofesor` bigint(20) NOT NULL,
  `idarticulo` bigint(20) NOT NULL,
  `pos` int(11) NOT NULL,
  `validado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `correo` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `correo`, `password`) VALUES
(0, 'mate282010@hotmail.com', 'qwerty'),
(1, 'rector@gmail.com', 'rector'),
(2, 'herper@gmail.com', 'jorgeperales'),
(3, 'fesaes@gmail.com', 'felipe123'),
(4, 'casrolcuau@gmail.com', 'castaneda'),
(5, 'erikue@gmail.com', 'erikue123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`idActividad`);

--
-- Indices de la tabla `Carreras`
--
ALTER TABLE `Carreras`
  ADD PRIMARY KEY (`idCarrera`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Institutos`
--
ALTER TABLE `Institutos`
  ADD PRIMARY KEY (`idInstitutos`);

--
-- Indices de la tabla `Profesores`
--
ALTER TABLE `Profesores`
  ADD PRIMARY KEY (`idProfesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `idActividad` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Carreras`
--
ALTER TABLE `Carreras`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Institutos`
--
ALTER TABLE `Institutos`
  MODIFY `idInstitutos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Profesores`
--
ALTER TABLE `Profesores`
  MODIFY `idProfesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
