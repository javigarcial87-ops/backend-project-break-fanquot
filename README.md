                                                      FANQUOT-project-Break

FanQuot es una Red Social que permite explorar, crear y gestionar frases o citas famosas de personajes ficticios de distintos medios como películas, series, libros o videojuegos, presentadas en formato "card".

Los usuarios pueden buscar citas, crear sus propias cards y votar sus favoritas, mientras que el administrador tiene permisos especiales para gestionar el contenido.

Tecnologías utilizadas:


-- FRONTEND

React (Javascript)

Vite

CSS

Vercel


-- BACKEND

Node.js

Express

MongoDB Atlas

Render




El proyecto estará dividido en dos repositorios en GitHub (https://github.com/javigarcial87-ops?tab=repositories):

fanquot/
│
├── frontend/   → React + Vite
│
└── backend/    → Node.js + Express



---------------------FUNCIONALIDADES PRINCIPALES--------------------

-- Visualización de cards

La aplicación mostrará una colección de cards en la Home, cada una con la siguiente información:

Nombre del personaje

Imagen del personaje

Tipo de medio (película, serie, libro o videojuego)

Título del medio

Frase o cita famosa

Likes totales recibidos por los usuarios

Botón "Me gusta" para dar like a la card (funcional solo al estar registrado y logeado)


LINKS del los repositorios en GITHUB

FRONTEND: https://github.com/javigarcial87-ops/frontend-project-break-fanquot
BACKEND: https://github.com/javigarcial87-ops/backend-project-break-fanquot


LINKS de acceso:

--Vercel frontend deploy: 
https://frontend-project-break-fanquot.vercel.app/

--Render backend deploy:
https://backend-project-break-fanquot.onrender.com



AUTENTIFICACIÓN

* Administrador
* Usuario

Credenciales de prueba:

--USUARIO (de prueba, ya registrado)
    email: yo@.es
    pass: 1234

--ADMIN (logeado con estas credenciales)
    email: administrador@fanquot.com
    pass: 123456

Tambien se puede probar a registar y usar esas credenciales para acceder.


-- USUARIO


Usuario logeado podrá:

-Crear nuevas cards mediante un formulario.

-Dar like a las cards.

-Formulario de creación de cards("Crear card", solo funcional al registrarse y logearse).

-- Campos del formulario:

-Nombre del personaje

-Imagen del personaje (URL)

-Tipo de medio

-Título del medio

-Frase o cita 

Al enviar el formulario:

--Se crea una nueva card en la Home(La última creada aparecerá la primera).

--Se añade a la base de datos.

--El usuario contará con un apartado "Mi pefíl" donde se guardan las cards que el usuario ha dado like
  y las cards que haya creado.



-- ADMINISTRADOR

Administrador accede mediante credenciales específicas y accede a propiedades exclusivas.

Además de las funciones de usuario, el administrador puede:

Acceder  un "Panel de usuario" donde:

Ver todas las cards existentes y buscar cards por:

-Nombre del personaje

-Título del medio


--Eliminación y edición de cards

Cada card mostrará un botón de elimminar y editar  solo visible para el administrador.

Al pulsar eliminar:
La card se elimina permanentemente de la página y de la base de datos.

Al pulsar editar, se accede al "Panel administrador" donde:



La aplicación incluirá un input de búsqueda en la Home que permitirá encontrar cards por:

Nombre del personaje

Título del medio

Puede devolver múltiples resultados

Ejemplo:

Un mismo medio puede tener:

varios personajes

varias frases

un personaje tener varias citas

Por lo tanto, la búsqueda mostrará inmediatamente todas las cards coincidentes.

-- SISTEMA DE LIKES

Cada card tendrá un botón de:

❤️ Like
Solo funcional al estar registrado y logeado

USABILIDAD:

Solo usuarios logueados pueden votar

Cada usuario solo puede votar una vez por card, al pulsar una segunda vez el boton "Me gusta", se eliminará su voto.

Página principal

La página principal cuenta con una paginación donde se pueden explorar
las cards con las que cuenta la página en ese momento, las últimas cards creadas
apareceran las primeras en la home.

Listado basado en el número de likes.

Card destacada

-- La card con más likes aparecerá en un destacado especial en el encabezado de la página:

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