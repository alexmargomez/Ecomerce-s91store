# Proyecto Full-Stack

Este es un proyecto full-stack que incluye un frontend desarrollado con React y un backend desarrollado con Node.js y Express. Ambos se encuentran en carpetas separadas dentro del mismo repositorio y utilizan una base de datos MySQL.


## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- Node.js (v14.0.0 o superior)
- npm (Node Package Manager)
- MySQL
- Git (para clonar el repositorio)

## Configuración del Backend

1. Clona el repositorio en tu máquina local:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio/backend
    ```

2. Instala las dependencias del backend:
    ```sh
    npm install
    ```

3. Crea un archivo de configuración `.env` en la carpeta `backend` con las variables de entorno necesarias:
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=tu-usuario
    DB_PASSWORD=tu-contraseña
    DB_NAME=nombre-de-tu-base-de-datos
    ```

4. Ejecuta los tests para verificar la conexión a la base de datos:
    ```sh
    npm test
    ```

5. Inicia el servidor de desarrollo:
    ```sh
    npm start
    ```

El servidor del backend debería estar corriendo en `http://localhost:5000`.

## Configuración del Frontend

1. Abre una nueva terminal y navega a la carpeta `frontend`:
    ```sh
    cd ../frontend
    ```

2. Instala las dependencias del frontend:
    ```sh
    npm install
    ```

3. Inicia la aplicación de React:
    ```sh
    npm start
    ```

La aplicación de React debería estar corriendo en `http://localhost:3000`.

## Scripts Disponibles

### Backend
- `npm install nodemon --save-dev`: instalar nodemon
- `npm start`: Inicia el servidor de desarrollo.
- `npm run dev`: Inicia el servidor de desarrollo con nodemon para recargar automáticamente al guardar.
- `npm test`: Ejecuta las pruebas del backend.

### Frontend

- `npm start`: Inicia la aplicación de React en modo de desarrollo.
- `npm build`: Construye la aplicación para producción en la carpeta `build`.
- `npm test`: Ejecuta las pruebas de la aplicación de React.

## Despliegue

Para desplegar el proyecto en producción, sigue los pasos correspondientes para tu plataforma de despliegue (por ejemplo, Heroku, Vercel, AWS, etc.). Asegúrate de configurar las variables de entorno necesarias en tu entorno de producción.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añade nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
