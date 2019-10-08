# PuppiesForLife

Este proyecto fue creado con Angular para el FrontEnd y node.js (express) para el Backend

## Antes de comenzar

Antes de comenzar corriendo el proyecto, debes dirigirte desde la consola a las carpetas tanto del proyecto de FrontEnd y de BackEnd y correr el comando `npm install`.

En algunos casos puede aparecer el error al intentar instalar los paquetes de BackEnd :
`npm ERR! Failed at the bcrypt@3.0.6 install script`.
Para solucionar este error debe:

- Escribir el siguiente comando en la consola:
  - npm uninstall --save bcrypt
- Y después:
  - npm install --save bcryptjs
- Al final debe cambiar `const bcrypt = require('bcrypt')` por `const bcrypt = require('bcryptjs');` dentro de los archivos:
  - services/users/login.js
  - services/users/signUp.js

Seguido de esto ustede deberá ingresar los scripts de la carpeta `DB_adoptions` en su base de datos.

También debe crear un archivo `.env.default`donde debe agregar lo siguiente:

~~~
  DB_HOST = localhost
  DB_PORT = (3306)
  DB_USER = (usuario)
  DB_PASSWORD = (contraseña)
  DB_NAME = adoptions
  APP_PORT = (3000)
  ENV = default
  TOKEN_SECRET = supersecreto
~~~
Donde deberá cambiar los valores entre parentesis por los de su preferencia.


## Iniciar Servidor FrontEnd

Desde la consola, apuntando a la carpeta del proyecto corre el comando `ng serve` para iniciar el servidor FrontEnd. Desde el navegador introduce `http://localhost:4200/`.

## Iniciar Servidor BackEnd

Desde una nueva consola, apuntando a la carpeta del proyecto node.js corre el comando `node ./index.js` para iniciar el servidor BackEnd.

# Interfaz

## Adopciones

Desde aquí podras ver la información de los perritos en adopción.

Si quieres `elmininar` un perrito del tablero, debes `iniciar sesión` antes.

## Registrar Perro

Puedes `registrar un perro nuevo` para el tablero si has iniciado sesión e ingresas los datos que se piden en el formulario.

## Iniciar Sesión

Si tienes una cuenta creada puedes iniciar sesión para comenzar a agregar o eliminar perros del tablero. El botón de iniciar sesion se encuentra sobre el botón en la ezquina superior derecha en el nav.

## Regsitrarte

Puedes registrarte para comenzar a usar el sistema con derechos de usuario.

##### _Urbano, Viri y Ricardo_
