FanQuot

FanQuot es una aplicación web que permite explorar, crear y gestionar frases o citas famosas de personajes ficticios de distintos medios como películas, series, libros o videojuegos, presentadas en formato cards.

Los usuarios pueden buscar citas, crear sus propias cards y votar sus favoritas, mientras que el administrador tiene permisos especiales para gestionar el contenido.

Tecnologías utilizadas
Frontend

React

Vite

CSS

Responsive design (compatible con móvil y tablet)

Backend

Node.js

Express

Base de datos

MongoDB Atlas

Deploy

Render

Integración de APIs externas

La aplicación consumirá APIs públicas para validar o referenciar medios como:

Películas

Series

Libros

Videojuegos

Ejemplos posibles:

TMDB API (películas y series)

Google Books API

RAWG API (videojuegos)

Arquitectura del proyecto

El proyecto estará dividido en dos repositorios:

fanquot/
│
├── frontend/   → React + Vite
│
└── backend/    → Node.js + Express

Ambos proyectos se conectarán mediante peticiones HTTP (REST API).

Funcionalidades principales
Visualización de cards

La aplicación mostrará una colección de cards, cada una con la siguiente información:

Nombre del personaje

Imagen del personaje

Tipo de medio (película, serie, libro o videojuego)

Título del medio

Frase o cita famosa (máximo ~600 caracteres)

Las cards se mostrarán inicialmente a partir de un array de objetos predefinido.

Sistema de autenticación

La aplicación contará con login y logout.

Usuario

Un usuario autenticado podrá:

Crear nuevas cards mediante un formulario.

Dar like a las cards.

Buscar frases por personaje o medio.

Formulario de creación de cards

Campos del formulario:

Nombre del personaje

Imagen del personaje (URL)

Tipo de medio

Título del medio

Frase o cita (máximo ~600 caracteres)

Al enviar el formulario:

Se crea una nueva card.

Se añade a la base de datos.

Los datos del usuario se almacenan en localStorage.

Administrador

El administrador accede mediante credenciales específicas.

Además de las funciones de usuario, el administrador puede:

Panel de administrador

Ver todas las cards existentes

Buscar cards por:

Nombre del personaje

Nombre del medio

La búsqueda debe ignorar:

Mayúsculas/minúsculas

Tildes

Caracteres especiales

Eliminación de cards

Cada card mostrará un botón:

Delete

Solo visible para el administrador.

Al pulsarlo:

La card se elimina permanentemente de la base de datos.

Sistema de búsqueda

La aplicación incluirá un input de búsqueda que permitirá encontrar cards por:

Nombre del personaje

Título del medio

Características de la búsqueda:

Ignora mayúsculas y minúsculas

Ignora tildes

Puede devolver múltiples resultados

Ejemplo:

Un mismo medio puede tener:

varios personajes

varias frases

un personaje con varias citas

Por lo tanto, la búsqueda mostrará todas las cards coincidentes.

Sistema de votos (Likes)

Cada card tendrá un botón de:

❤️ Like

Reglas:

Solo usuarios logueados pueden votar

Cada usuario solo puede votar una vez por card

Página principal

La página principal mostrará:

Últimas cards añadidas

Las 10 últimas cards creadas por usuarios o administradores.

Cards más votadas

Listado basado en el número de likes.

Frase destacada

La card con más votos aparecerá en una sección especial:

Frase destacada
Ejemplo de estructura de una card (MongoDB)
{
  "characterName": "Gandalf",
  "characterImage": "https://...",
  "mediaType": "movie",
  "mediaTitle": "The Lord of the Rings",
  "quote": "A wizard is never late, nor is he early. He arrives precisely when he means to.",
  "likes": 120,
  "createdBy": "userId",
  "createdAt": "2026-03-15"
}

Endpoints del backend (ejemplo)
Cards
GET /cards
GET /cards/search
POST /cards
DELETE /cards/:id
PUT /cards/like/:id
Auth
POST /auth/login
POST /auth/register
POST /auth/logout
Extras implementados

✔ Mostrar las 10 últimas cards
✔ Sistema de búsqueda avanzada
✔ Sistema de likes
✔ Frase destacada (la más votada)
✔ Panel de administrador para eliminar cards