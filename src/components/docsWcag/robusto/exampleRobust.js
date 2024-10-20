/**
 * Estas variables almanecenan los ejemplos a renderizar en el componente robusto
 * @constant {String}
 */

export const codeExample1 = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructura Correcta</title>
</head>
<body>
    <header>
        <h1>Bienvenidos</h1>
    </header>
    <main>
        <section>
            <h2>Sección de Contenido</h2>
            <p>Este es un párrafo dentro de la sección.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 - Todos los derechos reservados</p>
    </footer>
</body>
</html>
`;

export const codeExample2 = 
`<form aria-labelledby="form-title">
    <h2 id="form-title">Formulario de Contacto</h2>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" aria-required="true" aria-label="Nombre completo">
    <button type="submit" aria-label="Enviar">Enviar</button>
</form>
`;

export const codeExample3 = 
`<button id="abrirModal" aria-haspopup="dialog" aria-controls="modal">Abrir Modal</button>

<div id="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true" style="display:none;">
    <h2 id="modal-title">Título del Modal</h2>
    <button id="cerrarModal" aria-label="Cerrar">Cerrar</button>
</div>
`;

export const codeExample4 = 
`<button style="color: #ffffff; background-color: #0057e7;">Enviar</button>
`;

export const codeExample5 = 
`<a href="#" style="outline: 2px solid yellow;">Enlace Accesible</a>
`;

export const codeExample6 = 
`<p style="color: #000000; background-color: #ffffff;">Texto con alto contraste</p>
`;

export const codeExample7 = 
`<a href="/contacto">Ir a la página de contacto</a>
`;
