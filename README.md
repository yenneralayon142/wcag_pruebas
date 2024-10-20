# Estandares WCAG

Este proyecto tiene como objetivo proporcionar una guía clara y concisa para que los desarrolladores puedan crear páginas web accesibles, cumpliendo con los estándares de la **Web Content Accessibility Guidelines (WCAG)**.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [React](https://nodejs.org/) (versión 16.8.x o mayor)
- [Node.js](https://nodejs.org/) (versión 14 o mayor)

## Instalación

Para instalar el proyecto localmente:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/yenneralayon142/WCAG.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd WCAG
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Estructura de Carpetas

La estructura del proyecto es la siguiente:

```
WCAG/
├── public/
│ └── (Archivos estáticos: imágenes, fuentes, etc.)
├── src/
│   ├── components/
│   │   └── (Componentes reutilizables)
│   ├── hooks/
│   │   └── (Funcionalidades)
│   ├── layouts/
│   │   └── (Plantillas reutilizables, header, footer.)
│   ├── pages/
│   │   └── (Vistas/páginas)
│   ├── services/
│   │   └── (Servicios encargados de la interacción con la base de datos)
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── styles.css
├── package.json (manejar dependencias)
```

## Páginas
El sistema de información tendrá las siguientes páginas:

- **Inicio:** Página principal del sistema que ofrece una visión general y una introducción a los estándares WCAG.
- **Enfermedades y WCAG:** Página dedicada a listar y describir diversas enfermedades, proporcionando información accesible y relevante en el contexto de las pautas WCAG.
- **¿Quiénes somos?:** Página en la cual se muestra los equipos involucrados con la planeación/desarrollo del proyecto. 
- **Documentación:** Página que incluye documentación detallada para ayudar a los desarrolladores a crear páginas accesibles conforme a los estándares WCAG.