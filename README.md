# 🛒 ShopMaster - E-Commerce SPA

![ShopMaster Banner](https://img.shields.io/badge/ShopMaster-E--Commerce%20SPA-007BFF?style=for-the-badge&logo=appveyor)

ShopMaster es una aplicación web tipo **Single Page Application (SPA)** de comercio electrónico, desarrollada como un proyecto moderno, rápido y responsivo. Consume la API pública [FakeStoreAPI](https://fakestoreapi.com/) para renderizar dinámicamente un catálogo de productos, permitiendo una simulación completa de compra, incluyendo la gestión de carrito, simulación de pasarela de pagos y **generación de recibos térmicos en PDF**.

---

## ✨ Características Principales

*   **⚡ Renderizado Dinámico y SPA:** Inyección de productos en el DOM mediante manipulación asíncrona (`fetch`), ofreciendo una experiencia fluida sin recargar la página.
*   **🔎 Búsqueda en Tiempo Real:** Filtro de búsqueda dinámico que localiza productos al instante mientras el usuario escribe.
*   **🛒 Carrito de Compras Persistente:** Sistema de carrito interactivo utilizando `LocalStorage`, manteniendo los productos añadidos incluso si el usuario cierra el navegador.
*   **💳 Simulador de Pasarela de Pago:** Formulario modal validado para procesar pagos de prueba.
*   **🧾 Generación de Facturas PDF (Thermal Receipt):** Integración nativa con `jsPDF` para construir, formatear (fuente monoespaciada) y descargar automáticamente un ticket virtual tras cada compra.
*   **📱 Diseño Responsivo & UI/UX Premium:** Interfaz pulida construida con **Bootstrap 5**, Font Awesome para iconografía y CSS personalizado para animaciones fluidas, contrastes óptimos (Psicología del color) e interacciones modales.
*   **👨‍💻 Footer de Perfil Profesional:** Inclusión de un modal integrado que sirve como tarjeta de presentación interactiva del desarrollador.

---

## 🛠️ Stack Tecnológico

El proyecto ha sido desarrollado utilizando un enfoque *Vanilla*, maximizando el rendimiento sin dependencias pesadas:

*   **Core:** HTML5, CSS3, JavaScript (ES6+ Asíncrono)
*   **Framework CSS:** Bootstrap 5.3.2
*   **Iconos:** Font Awesome 6.4.2
*   **Librería PDF:** jsPDF 2.5.1
*   **Fuente de Datos:** [FakeStoreAPI](https://fakestoreapi.com/products)

---

## 🚀 Arquitectura del Proyecto

El código está estructurado para asegurar su fácil lectura, escalabilidad y mantenimiento:

```text
📦 PROYECTO APP SPA - FAKESTOREAPI
 ┣ 📜 index.html                  # Estructura central, Navbar, Modales, Grids y Offcanvas
 ┣ 📜 styles.css                  # Variables de color, micro-interacciones y UI personalizada
 ┣ 📜 app.js                      # Lógica principal, Fetch, LocalStorage, Búsqueda y jsPDF
 ┣ 📜 TUTORIAL_DESARROLLO_WEB.md  # Guía educativa completa desde cero
 ┗ 🖼️ FOTO_PORTADA_JUANCITO.png   # Asset local
```

---

## 🧠 Lógica Destacada (Deep Dive)

### 1. Extracción de Datos
Utilizamos `async/await` nativo para interceptar los datos de FakeStoreAPI, renderizando *Spinners* de carga para maximizar la retención de usuarios mientras se reciben los _payloads_.

### 2. Generación del Recibo (jsPDF)
La aplicación calcula dinámicamente el alto del documento PDF en función de la cantidad de *items* en el carrito, ajustando la orientación paramétrica a un formato `80mm` de ancho simulando rollos de impresión térmica reales. Se utilizó una fuente tipográfica tipo `courier` y tabulaciones matriciales algorítmicas para alinear precios y cantidades perfectamente.

---

## 🧑‍💻 Despliegue Local (¿Cómo probarlo?)

1.  **Clona este repositorio:**
    ```bash
    git clone https://github.com/JUANCITOPENA/mitienda-shopmaster.git
    ```
2.  **Abre la carpeta en VS Code:**
    ```bash
    cd mitienda-shopmaster
    code .
    ```
3.  **Ejecuta el servidor:** Utiliza la extensión *Live Server* o abre el archivo `index.html` directamente en tu navegador.

---

## 🌎 Live Demo
El proyecto está optimizado y preparado para correr en **GitHub Pages** y **Vercel**. ¡Visualízalo en vivo desde la URL de publicación de tu repositorio!

---

> *"El código no solo debe funcionar, debe contar una historia de eficiencia y diseño."*
> **— Ing. Juancito Peña**
