# React + VueJS + NestJS CRUD 




## Instalación & Uso
Tener instalado NodeJS, Yarn (o npm) y MySQL. 
Instalar todas las dependencias en cada uno de los proyectos 

- usar el comando npm install

Dependencias adicionales:

- npm install -g @vue/cli 
- npm i -g @nestjs/cli 
- npm install -g typescript@lates

Modificar o crear el archivo .env en el proyecto api con la configuración de la base de datos a la cual se desea apuntar.

El puerto de escucha del proyecto api está configurado en el archivo api/src/main.ts por defecto está "await app.listen(3001);"

En el proyecto admin-ui src/config/connection.js  cambiar la url que genera el comando yarn start al iniciar el proyecto api.

En el proyecto guests-crud modificar el archivo src/helper.js poner la misma url mencionada anteriormente. 

# Notas
- Usar yarn start o npm start para levantar los servicios de api.
- Usar npm start  para correr el proyecto admin-ui react interface
- Usar npm run serve para correr el proyecto guests-crud vue interface


