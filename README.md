                                                      FANQUOT

                                        -project-Break-Javier-Garcia-Alvarez- FULLSTACK



FanQuot es una Red Social que permite explorar, crear y gestionar "cards" con frases o citas famosas de personajes ficticios(o reales) de distintos medios como películas, series, libros o videojuegos, presentadas en formato "card".

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

--frontend/   → React + Vite

--backend/    → Node.js + Express



---------------------FUNCIONALIDADES PRINCIPALES--------------------

-- Visualización de cards

La aplicación mostrará una colección de cards en la Home y un destacado en su encabezado que muestra la card más votada según el número de likes de los usuarios registrados.
Cada "Card" cuenta con la siguiente información:

- Nombre del personaje

- Imagen del personaje

- Tipo de medio (película (MOVIE), serie (TV), libro (BOOK) o videojuego (GAMING))

- Título del medio donde aparece el personaje

- Frase o cita famosa

- Likes totales de la card, recibidos por los usuarios registrados en la página

- Botón "Me gusta" para dar like a la card (funcional solo al estar registrado y logeado)

- Un sistema de paginación simple para navegar entre las cards disponibles.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

LINKS del los repositorios en GITHUB

FRONTEND: https://github.com/javigarcial87-ops/frontend-project-break-fanquot
BACKEND: https://github.com/javigarcial87-ops/backend-project-break-fanquot


LINKS de acceso:

-- Vercel frontend DEPLOY: 
https://frontend-project-break-fanquot.vercel.app/

-- Render backend DEPLOY:
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

Tambien se puede probar a registar como nuevo usuario y usar esas credenciales para acceder al contenido.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------   ROLES   ---------------------------------------------------------------------------------------------------------------------------------------------------

_________________________________________
*-- USUARIO


Usuario registrado y logeado podrá:


-Dar like a las cards.

-Acceso al formulario de creación de cards.

-Un menú "Mi perfil" en el navbar, donde aparecen guardadas las cards a las que el usuario haya dado "Me gusta" y un registro
  de las cards que haya creado el usuario.


-- Los campos del formulario de CREACIÓN (donde el usuario podrá escribir mediante inputs...):

-Nombre del personaje

-Imagen del personaje (subida provisional mediante URL, subidas en local o cloudinary (...WORK IN PROGRESS...) )

-Selector del tipo de medio (movie, tv, gaming y book)

-Título del medio donde aparece el personaje

-Frase o cita famosa del personaje

-Boton "crear card"

-Al pulsar botón "Crear card" se envia el formulario:

  --Se crea una nueva/s card/s en la Home (La/s última/s creada/s aparecerá/n las primeras en orden de creación).

  --Se añade la información de la card a la base de datos (MongoDB Atlas).
__________________________________

_______________________________________________________________________
*-- ADMINISTRADOR



-Administrador se logea mediante credenciales específicas y accede a propiedades exclusivas.

-El administrador al logarse puede:

-Acceder  un "Panel de administrador" donde:
  Aparecerá un buscador que al escribir el nombre o título del medio, aparecerá la lista de coincidencias
  con la búsqueda junto con nombre de personaje, titulo de medio, fecha en la que se añadió la card y nombre del usuario que la creó (...WORK IN PROGRESS...)

-Cada card mostrada en "Home", tendrá un botón de ELIMINAR y EDITAR  solo visible para el administrador.

-Al pulsar ELIMINAR:
  La card se elimina permanentemente de la página y de la base de datos.

-Al pulsar EDITAR: 
  Se accede al formulario "Editar Card" donde podemos modificar la card que queramos. Una vez hechos los cambios,
  pulsamos el botón "Guardar cambios" y la card se guardara en la Home, con los cambios que se hayan realizado.
______________________________________________________________________________________________________________________________________



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- SISTEMA DE LIKES

Cada card por defecto en Home, tendrá un botón de:

" Me gusta "

-Solo funcional al estar registrado y logeado.
-Cada usuario solo puede votar una vez por card, al pulsar una segunda vez el boton "Me gusta" sobre la misma card que acaba de votar, se eliminará su voto.



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