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
Cuenta también con un input de busqueda para buscar cards según el nombre de personaje o título de medio donde aparece tal personaje y poder explorar el contenido de la página.

Cada "Card" cuenta con la siguiente información:

- Nombre del personaje

- Imagen del personaje

- Tipo de medio (película (MOVIE), serie (TV), libro (BOOK) o videojuego (GAMING))

- Título del medio donde aparece el personaje

- Frase o cita famosa del personaje

- Likes totales de la card, recibidos por los usuarios registrados en la página

- Botón "Me gusta" para dar like a la card (solo será funcional al estar registrado y logeado)

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

Tambien se puede probar a registar un nuevo usuario (en el navbar, "REGISTRAR") y usar esas credenciales para acceder al contenido (solo como usuario).
___________________________________________________________________________________________________________________________________________________________________



--------------------------------------   ROLES   ---------------------------------------------------------------------------------------------------------------------------------------------------


__________________________________________________________________________________________

-- VISITANTE O invitado (GUEST) --

Accede a la pagina mediante un link y en la Home puede ver las cards que hay hasta el momento y en el input de busqueda, buscar según nombre de personaje o título de medio y explorar el contenido disponible.

_________________________________________________________________________________________

-- USUARIO --

-Usuario registrado y logeado podrá:

-Dar like a las cards.

-Acceso al formulario de creación.

-Un menú "Mi perfil" en el navbar, donde aparecen guardadas las cards a las que el usuario haya dado "Me gusta" y un registro
  de las cards que haya creado.



-- EL FORMULARIO DE CREACIÓN --
(donde el usuario podrá crear mediante inputs las cards), (limitación de creación de número de cards por usuario (...WORK IN PROGRESS...)) --

-Nombre del personaje

-Imagen del personaje (subida provisional mediante URL, subidas de archivos de imágen en local o cloudinary (...WORK IN PROGRESS...) )

-Selector del tipo de medio (MOVIE(cine), TV(televisión o programas televisivos), GAMING(juegos o multimedia) y BOOK(Medios físicos: Libros,comics...etc))

-Título del medio donde aparece el personaje

-Frase o cita famosa del personaje

-Boton "crear card"

-Al pulsar botón "Crear card" se envia un formulario donde...:

  --Se crean una/s nueva/s card/s en la Home (La/s última/s card/s creada/s aparecerá/n la/s primera/s en orden de creación).

  --Se guardará la información de la card creada en la base de datos (MongoDB Atlas).

____________________________________________________________________________________________________________________________________________________________________________________________________


*-- ADMINISTRADOR

-Administrador logeado mediante credenciales específicas, puede acceder a propiedades exclusivas y tener un control total del contenido.

-El administrador al logarse:

- Accede a un "Panel de administrador" donde:
  Aparecerá un input buscador que al escribir el nombre o título del medio, aparecerá una lista de coincidencias disponibles, y mostrará por cards:

  El nombre del personaje, titulo del medio, fecha en la que se añadió la card y nombre del usuario que la creó (...WORK IN PROGRESS...)

-Cada elemento mostrado en esa lista, tiene un botón de ELIMINAR y EDITAR.

-Al pulsar ELIMINAR:
  La card se eliminará permanentemente de la página y de la base de datos.

-Al pulsar EDITAR: 
  Se accede al formulario "Editar Card" (parecido al formulario de creación, pero con los datos de la card que queremos modificar ya incluidos en los inputs), donde podemos modificar los datos de la card y luego pulsando el botón "Guardar cambios", guardaremos la card en la Home, con los cambios que se hayan realizado.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




-- SISTEMA DE LIKES --

-Cada card en la Home, tiene un contador con el numero total de likes que esa card ha recibido por parte de todos los usuarios registrados en la página y un boton de "Me gusta", para votar.

- RECUERDA: El botón "Me gusta" solo es funcional al estar registrado y logeado.

-Cada usuario registrado y logeado, solo puede votar "Me gusta" una vez por card, al pulsar una segunda vez el boton de "Me gusta" sobre la misma card que ya ha votado, eliminará su voto, y se eliminará tambien esa card guardada en "Mi perfíl".

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