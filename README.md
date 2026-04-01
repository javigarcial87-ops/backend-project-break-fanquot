                                                      FANQUOT-project-Break

FanQuot es una aplicación web que permite explorar, crear y gestionar frases o citas famosas de personajes ficticios de distintos medios como películas, series, libros o videojuegos, presentadas en formato "card".

Los usuarios pueden buscar citas, crear sus propias cards y votar sus favoritas, mientras que el administrador tiene permisos especiales para gestionar el contenido.

Tecnologías utilizadas:

-- FRONTEND

React

Vite

CSS

Netifly

-- BACKEND

Node.js

Express

Base de datos

MongoDB Atlas

Render




El proyecto estará dividido en dos repositorios:

fanquot/
│
├── frontend/   → React + Vite
│
└── backend/    → Node.js + Express

Ambos proyectos se conectarán a la base de datos en MongoDBAtlas.


---------------------FUNCIONALIDADES PRINCIPALES--------------------

-- Visualización de cards

La aplicación mostrará una colección de cards, cada una con la siguiente información:

Nombre del personaje

Imagen del personaje

Tipo de medio (película, serie, libro o videojuego)

Título del medio

Frase o cita famosa

Las cards se mostrarán inicialmente a partir de un array de objetos predefinido.

LINKS del los repositorios en GITHUB

FRONTEND: https://github.com/javigarcial87-ops/frontend-project-break-fanquot
BACKEND: https://github.com/javigarcial87-ops/backend-project-break-fanquot


LINKS de acceso:

--Netlify frontend deploy: 
https://frontend-project-break-fanquot.netlify.app/

--Render backend deploy:
https://backend-project-break-fanquot.onrender.com



AUTENTIFICACIÓN

* Administrador
* Usuario

Credenciales de prueba:

--user(ya registrado)
email: yo@.es
pass: 1234

--admn
email: administrador@fanquot.com
pass: 123456

tambien se puede registar y usar esas credenciales para acceder.


-- USUARIO

Usuario logeado podrá:

Crear nuevas cards mediante un formulario.

Dar like a las cards.

Buscar frases por personaje o título del medio en el que aparecen.

Formulario de creación de cards

Campos del formulario:

Nombre del personaje

Imagen del personaje (URL)

Tipo de medio

Título del medio

Frase o cita (máximo ~600 caracteres)

Al enviar el formulario:

--Se crea una nueva card en la Home(La última creada aparecerá la primera).

--Se añade a la base de datos.

--El usuario contará con un apartado "Mi pefíl" donde se guardan las cards que el usuario habra dado like.


ADMINISTRADOR

Administrador accede mediante credenciales específicas.

Además de las funciones de usuario, el administrador puede:

Panel de administrador

Ver todas las cards existentes

-- Buscar cards por:

-Nombre del personaje

-Nombre del medio


--Eliminación y edición de cards

Cada card mostrará un botón de elimminar y editar  solo visible para el administrador.

Al pulsarlo:

La card se elimina permanentemente de la base de datos.

Sistema de búsqueda

La aplicación incluirá un input de búsqueda en la Home que permitirá encontrar cards por:

Nombre del personaje

Título del medio

Puede devolver múltiples resultados

Ejemplo:

Un mismo medio puede tener:

varios personajes

varias frases

un personaje con varias citas

Por lo tanto, la búsqueda mostrará todas las cards coincidentes.

-- SISTEMA DE LIKES

Cada card tendrá un botón de:

❤️ Like

USABILIDAD:

Solo usuarios logueados pueden votar

Cada usuario solo puede votar una vez por card

Página principal

La página principal cuenta con una paginación donde se pueden revisar
las cards con las que cuenta la página en ese momento

Listado basado en el número de likes.

Card destacada

--La card con más likes aparecerá en un destacado especial:

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


Autor: Javier García Álvarez