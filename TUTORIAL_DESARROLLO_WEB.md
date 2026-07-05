# 🚀 Tutorial: Desarrollo Web y Maquetación Paso a Paso con IA

¡Bienvenido al fascinante mundo del Desarrollo Web! En esta guía aprenderás desde los conceptos más básicos hasta cómo subir tu propio proyecto de E-commerce a internet de manera gratuita, utilizando herramientas profesionales. 

---

## 📖 Parte 1: ¿Qué es la Programación Web?

La programación web es el proceso de crear y mantener sitios web. Imagina que construir una página web es como construir una casa. Necesitas una estructura, necesitas diseño (pintura, muebles) y necesitas electricidad para que todo funcione. En el desarrollo web, utilizamos diferentes lenguajes y tecnologías para lograr esto.

### 🏛️ Las Tecnologías Fundamentales (En Orden Histórico)

1. **HTML (HyperText Markup Language) - Los cimientos (1991):**
   Es el esqueleto de la página. Define dónde va el texto, dónde van las imágenes y los enlaces. Sin HTML, no hay web. *En nuestro proyecto, es el archivo `index.html` donde declaramos el carrito, los modales y el pie de página.*

2. **CSS (Cascading Style Sheets) - La pintura y decoración (1996):**
   HTML por sí solo es feo. CSS llegó para darle color, tamaño, fuentes y diseño. *En nuestro proyecto, `styles.css` se encarga de las animaciones, los colores (azul, verde) y el aspecto general de los botones y el texto.*

3. **JavaScript (JS) - La electricidad y el movimiento (1995):**
   Le da vida e interactividad a la página. Permite que al hacer clic en "Agregar al carrito", algo realmente suceda sin recargar la página. *En nuestro proyecto, `app.js` es el cerebro que pide los productos a la API y calcula el total de la compra.*

4. **Bootstrap - Los muebles prefabricados (2011):**
   Escribir todo el CSS a mano toma tiempo. Bootstrap es un "Framework" (un conjunto de herramientas) que te da botones, ventanas modales y sistemas de cuadrícula (grids) ya diseñados para que tu web se vea bien en celulares (Responsive) rápidamente. *Lo incluimos en el HTML y por eso la página se ve profesional al instante.*

5. **Font Awesome - Los iconos (2012):**
   Es una biblioteca que nos proporciona cientos de iconos gráficos (como el carrito de compras 🛒 o los logos de redes sociales) listos para usar en lugar de buscar imágenes una por una.

---

## 🛠️ Parte 2: Preparando el Entorno en Visual Studio Code (VS Code)

Para escribir código necesitamos un editor. **Visual Studio Code** es el más popular.

### Paso 1: Crear la Carpeta del Proyecto
1. En tu escritorio, haz clic derecho y selecciona **Nuevo > Carpeta**.
2. Nombra la carpeta como `MI_PRIMERA_TIENDA`.

### Paso 2: Abrir en VS Code
1. Abre el programa Visual Studio Code.
2. Ve a **Archivo (File) > Abrir Carpeta (Open Folder)** y selecciona la carpeta `MI_PRIMERA_TIENDA` que creaste.

### Paso 3: Crear los Archivos
En la barra lateral izquierda de VS Code, verás el nombre de tu carpeta. Haz clic en el ícono de "Nuevo Archivo" (un papelito con un signo "+") y crea los siguientes archivos:
- `index.html` (Copia y pega aquí el código HTML de nuestra tienda).
- `styles.css` (Copia y pega aquí el código CSS).
- `app.js` (Copia y pega aquí el código de JavaScript).
- Asegúrate de poner una foto tuya llamada `FOTO_PORTADA_JUANCITO.png` en la misma carpeta para el Footer.

### Paso 4: Instalar Live Server (Extensión)
Para ver tu página funcionando sin tener que recargar el navegador cada vez que guardas un cambio:
1. En VS Code, ve a la barra lateral izquierda y haz clic en el ícono de **Extensiones** (son 4 cuadritos).
2. En el buscador, escribe **Live Server** (creado por Ritwick Dey).
3. Haz clic en **Instalar**.
4. Ahora, ve a tu archivo `index.html`, haz clic derecho sobre el código y selecciona **Open with Live Server**. ¡Se abrirá tu navegador con la tienda funcionando!

---

## 🌍 Parte 3: Despliegue en GitHub (El Método Manual)

GitHub es como un Google Drive pero para programadores. Nos permite guardar nuestro código y publicarlo gratis.

### 1. Crear una cuenta en GitHub
1. Entra a [github.com](https://github.com) y haz clic en **Sign Up**.
2. Ingresa tu correo, crea una contraseña y un nombre de usuario. Sigue los pasos de verificación.

### 2. Crear un Repositorio (Proyecto)
1. Una vez dentro de tu cuenta, haz clic en el botón verde **"New"** (Nuevo) o en el ícono de **+** arriba a la derecha > **New repository**.
2. En **Repository name**, pon un nombre (ej. `mi-tienda-ia`).
3. Déjalo en **Public** (Público) para que todos puedan verlo.
4. Haz clic en el botón verde **Create repository**.

### 3. Subir los archivos (Arrastrar y Soltar)
1. En la página que aparece, haz clic en el enlace azul que dice **"uploading an existing file"** (subir un archivo existente).
2. Se abrirá una pantalla. Abre tu carpeta `MI_PRIMERA_TIENDA` en tu computadora.
3. Selecciona todos tus archivos (`index.html`, `styles.css`, `app.js` y tu foto) y **arrástralos** hacia la pantalla de GitHub.
4. Espera a que carguen y luego haz clic en el botón verde **"Commit changes"** abajo del todo.

### 4. Publicar la página con GitHub Pages
1. En tu repositorio, haz clic en la pestaña **Settings** (Configuración) arriba a la derecha.
2. En el menú izquierdo, busca la opción **Pages**.
3. Bajo "Build and deployment" > "Source", asegúrate de que diga "Deploy from a branch".
4. Bajo "Branch", haz clic en `None`, selecciona `main` (o `master`) y dale a **Save** (Guardar).
5. Espera uno o dos minutos, recarga la página, y verás un mensaje que dice: *"Your site is live at..."* con un enlace. **¡Ese es el link de tu web para compartir con el mundo!**

---

## 🚀 Parte 4: Despliegue en Vercel (Alternativa más potente)

Vercel es una plataforma increíble para alojar sitios web, es muy rápida y fácil de usar conectándola con GitHub.

### 1. Crear cuenta en Vercel y Vincular GitHub
1. Entra a [vercel.com](https://vercel.com) y haz clic en **Sign Up**.
2. Selecciona **"Continue with GitHub"**. Te pedirá autorización, dale a "Authorize Vercel".
3. Esto vinculará tu cuenta de Vercel con la de GitHub de forma segura.

### 2. Importar tu Proyecto
1. Una vez en el panel (Dashboard) de Vercel, haz clic en el botón negro **"Add New..."** y luego en **"Project"**.
2. Vercel leerá tus proyectos de GitHub. Busca el repositorio que creaste (`mi-tienda-ia`) y haz clic en el botón **"Import"** a su lado.
3. Te pedirá configurar el proyecto. Como es un proyecto sencillo de HTML/CSS/JS (Vanilla), deja todo tal cual está.
4. Haz clic en el botón azul **"Deploy"**.

### 3. Visualizar y Compartir
1. Vercel comenzará a procesar tu código (toma unos segundos).
2. Verás una pantalla de "Congratulations!" con fuegos artificiales.
3. Haz clic en **"Continue to Dashboard"**.
4. Arriba verás el botón de **"Visit"** y un enlace (dominio) generado por Vercel (ej. `mi-tienda-ia.vercel.app`).
5. **¡Copia ese enlace y compártelo en tus redes sociales!** Tu E-commerce con Inteligencia Artificial está oficialmente en línea.

---

### 🎉 ¡Felicidades!
Has pasado de no tener código a construir una SPA (Single Page Application) funcional, con carrito, generación de PDF, y has aprendido a alojarla en los servidores más utilizados por los profesionales hoy en día. ¡El límite lo pones tú!
