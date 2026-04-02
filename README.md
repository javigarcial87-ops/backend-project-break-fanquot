                                                              FANQUOT

                                        -  Project-Break-Javier-Garcia-Alvarez- FULLSTACK  -



FanQuot es una Red Social que permite explorar, crear y gestionar "cards" con frases o citas famosas de personajes ficticios (o reales) de distintos tipos de medios como películas, series, libros o videojuegos.
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

____________________________________________________________________________________________________________________________________


El proyecto estará dividido en dos repositorios en GitHub (https://github.com/javigarcial87-ops?tab=repositories)


-- FRONTEND/   → React + Vite            https://github.com/javigarcial87-ops/frontend-project-break-fanquot

-- BACKEND/    → Node.js + Express       https://github.com/javigarcial87-ops/backend-project-break-fanquot

Y dos links DEPLOY


-- Vercel frontend DEPLOY: 
https://frontend-project-break-fanquot.vercel.app/

-- Render backend DEPLOY:
https://backend-project-break-fanquot.onrender.com


______________________________________________________________________________________________________________________________________

--------------------- FUNCIONALIDADES --------------------

La aplicación mostrará una colección de cards disponibles en la Home y un destacado en su encabezado que muestra la card más votada, según el número de likes de los usuarios registrados.
Cuenta también con un input de busqueda para encontrar las cards según el nombre de personaje o título de medio y poder explorar el contenido.

Cada "Card" cuenta con la siguiente información:

- Nombre del personaje

- Imagen del personaje

- Tipo de medio (película (MOVIE), serie (TV), libro (BOOK) o videojuego (GAMING))

- Título del medio donde aparece el personaje

- Frase o cita famosa del personaje

- Likes totales de la card, recibidos por los usuarios registrados en la página

- Botón "Me gusta" para dar like a la card (funcional solo al estar registrado y logeado)

- Un sistema de paginación simple al final de la lista de cards de la Home, para navegar manualmente por el contenido.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

________________________ACCESOS DE PRUEBA_______________________________________________________________________________________________________________________


AUTENTIFICACIÓN

* Administrador
* Usuario

Credenciales de prueba: en el navbar, pulsa "LOGIN" e introduce estas credenciales de prueba.

--USUARIO (de prueba, ya registrado)
    email: yo@.es
    pass: 1234

--ADMIN (logeado con estas credenciales)
    email: administrador@fanquot.com
    pass: 123456

Tambien se puede probar a registar un nuevo usuario ("REGISTRAR") y usar esas credenciales para acceder al contenido.
___________________________________________________________________________________________________________________________________________________________________



--------------------------------------   ROLES   ---------------------------------------------------------------------------------------------------------------------------------------------------

_________________________________________

-- USUARIO --

  -Usuario registrado y logeado podrá:


-Dar like a las cards.

-Acceso al formulario de creación de cards.

-Un menú "Mi perfil" en el navbar, donde aparecen guardadas las cards a las que el usuario haya dado "Me gusta" y un registro
  de las cards que haya creado.

-- EL FORMULARIO DE CREACIÓN (donde el usuario podrá crear mediante inputs...) --

-Nombre del personaje

-Imagen del personaje (subida provisional mediante URL, subidas de archivos de imágen en local o cloudinary (...WORK IN PROGRESS...) )

-Selector del tipo de medio (movie, tv, gaming y book)

-Título del medio donde aparece el personaje

-Frase o cita famosa del personaje

-Boton "crear card"

-Al pulsar botón "Crear card" se envia el formulario:

  --Se crea una nueva/s card/s en la Home (La/s última/s creada/s aparecerá/n las primeras en orden de creación).

  --Se guarda la información de la card creada a la base de datos (MongoDB Atlas).
__________________________________

_______________________________________________________________________

*-- ADMINISTRADOR

-Administrador logeado mediante credenciales específicas, puede acceder a propiedades exclusivas.

-El administrador al logarse:

- Accede a un "Panel de administrador" donde:
  Aparecerá un buscador que al escribir el nombre o título del medio, aparecerá la lista de coincidencias disponibles, y mostrara una lista con:

  El nombre del personaje, titulo del medio, fecha en la que se añadió la card y nombre del usuario que la creó (...WORK IN PROGRESS...)

-Cada elemento mostrado con estas credenciales, tendrá un botón de ELIMINAR y EDITAR (funciones de "Mi perfil" o votar "Me gusta", se mantienen)  solo visible para el administrador.

-Al pulsar ELIMINAR:
  La card se eliminará permanentemente de la página y de la base de datos.

-Al pulsar EDITAR: 
  Se accede al formulario "Editar Card" (parecido al formulario de creación, pero con los datos de la card que queramos modificar ya incluidos en los inputs), donde podemos modificar la card que queramos 
  y luego pulsando el botón "Guardar cambios", guardaremos la card en la Home, con los cambios que se hayan realizado.
______________________________________________________________________________________________________________________________________

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA DE LIKES --

-Cada card en la Home, muestra un contador con el numero total de likes que esa card ha recibido por parte de todos los usuarios registrados de la página y un boton "Me gusta" para votar.

-El botón "Me gusta" solo es funcional al estar registrado y logeado.

-Cada usuario logeado, solo puede votar like una vez por card, al pulsar una segunda vez el boton "Me gusta" sobre la misma card que acaba de votar, eliminará su voto, y se eliminará tambien esa card
  guardada en "Mi perfíl".

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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