# OCW Codex

Una aplicación web para explorar el códice del juego de cartas OCW (OCW Card Game).

## Descripción

OCW Codex es una herramienta de referencia para jugadores del juego de cartas OCW. Permite a los usuarios navegar y buscar información detallada sobre personajes, habilidades, rasgos y equipamiento del juego. La aplicación está diseñada para ser rápida, responsiva y fácil de usar.

## Características

-   **Exploración de Códice**: Visualiza todas las cartas de personaje y equipamiento con sus estadísticas y habilidades.
-   **Glosario de Habilidades**: Un listado completo de todas las habilidades del juego con sus descripciones.
-   **Glosario de Rasgos**: Un listado de los rasgos disponibles en el juego.
-   **Diseño Responsivo**: Totalmente funcional en dispositivos de escritorio y móviles.
-   **Soporte Multi-idioma**: Actualmente disponible en Español e Inglés (parcialmente).

## Tecnologías Utilizadas

-   [Vue.js 3](https://vuejs.org/) (con Composition API y `<script setup>`)
-   Vue Router para el enrutamiento del lado del cliente.
-   Tailwind CSS para el diseño de la interfaz de usuario.
-   Vue I18n para la internacionalización.

## Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── assets/         # Archivos estáticos como CSS e imágenes
│   ├── components/     # Componentes de Vue reutilizables
│   ├── data/           # Archivos JSON con los datos del juego (cartas, habilidades, etc.)
│   ├── locales/        # Archivos de traducción para i18n
│   ├── router/         # Configuración de Vue Router
│   ├── views/          # Componentes de página (vistas)
│   ├── App.vue         # Componente raíz de la aplicación
│   └── main.js         # Punto de entrada de la aplicación
├── package.json
└── README.md
```

## Instalación y Uso

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

-   Node.js (versión 16.x o superior)
-   npm o yarn

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/ocw-codex.git
    cd ocw-codex
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).
    ```bash
    npm run dev
    ```

4.  **Compila para producción:**
    Genera los archivos estáticos para el despliegue en el directorio `dist/`.
    ```bash
    npm run build
    ```