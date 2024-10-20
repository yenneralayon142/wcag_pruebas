/**
 * Estas variables almacenan los ejemplos a renderizar en el componente comprensible
 * @type {String}
 */

export const language = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Idioma de la Página</title>
</head>
<body>
    <h1>Bienvenido a Nuestro Sitio Web</h1>
    <p>Este es un ejemplo de una página web accesible con el idioma correctamente configurado.</p>
</body>
</html>
`;

export const toFocus =
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Al Foco</title>
</head>
<body>
    <h1>Formulario de Registro</h1>

    <!-- El campo no provoca un cambio de contexto al enfocarse -->
    <form>
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" name="nombre">

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
`;

export const toStart = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Al Entrada</title>
</head>
<body>
    <h1>Seleccionar Idioma</h1>

    <!-- El menú desplegable no cambia automáticamente de página al seleccionar un idioma -->
    <form>
        <label for="idioma">Seleccione un idioma:</label>
        <select id="idioma" name="idioma">
            <option value="es">Español</option>
            <option value="en">Inglés</option>
        </select>
    </form>
</body>
</html>
`;

export const errorsIdentificcation = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Identificación de Errores</title>
</head>
<body>
    <h1>Formulario de Registro</h1>

    <form onsubmit="return validarFormulario()">
        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo">
        <span id="error-correo" style="color: red; display: none;">Por favor, introduzca un correo válido.</span>
        
        <button type="submit">Enviar</button>
    </form>

    <script>
        function validarFormulario() {
            var correo = document.getElementById("correo").value;
            var errorCorreo = document.getElementById("error-correo");

            if (!correo.includes("@")) {
                errorCorreo.style.display = "block";
                return false;
            }
            return true;
        }
    </script>
</body>
</html>
`;

export const instructions = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Etiquetas o Instrucciones</title>
</head>
<body>
    <h1>Formulario de Inscripción</h1>

    <form>
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" name="nombre">

        <label for="telefono">Número de Teléfono (Incluye código de país):</label>
        <input type="tel" id="telefono" name="telefono">

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
`;

export const navigationConsistent = 
`<!-- Ejemplo de un menú de navegación repetido de manera consistente en todas las páginas -->
<nav>
    <ul>
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</nav>
`;

export const identificationConsistent = 
`<!-- Botón de búsqueda consistentemente etiquetado en todo el sitio web -->
<form action="/buscar" method="get">
    <input type="text" name="q" aria-label="Buscar">
    <button type="submit">Buscar</button>
</form>
`;
export const errorSuggestion =
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sugerencias de Error</title>
</head>
<body>
    <h1>Formulario de Registro</h1>

    <form onsubmit="return validarFormulario()">
        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo">
        <span id="error-correo" style="color: red; display: none;"></span>

        <button type="submit">Enviar</button>
    </form>

    <script>
        function validarFormulario() {
            var correo = document.getElementById("correo").value;
            var errorCorreo = document.getElementById("error-correo");

            if (!correo.includes("@")) {
                errorCorreo.innerHTML = "Por favor, ingrese un correo válido. Ejemplo: nombre@dominio.com";
                errorCorreo.style.display = "block";
                return false;
            }
            return true;
        }
    </script>
</body>
</html>
`;

export const preventionErrors =
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Transacción</title>
</head>
<body>
    <h1>Resumen de Compra</h1>

    <p>Producto: Laptop XYZ</p>
    <p>Precio: $1,200</p>

    <form onsubmit="return confirmarCompra()">
        <button type="submit">Confirmar Compra</button>
    </form>

    <button onclick="revisarCompra()">Revisar Detalles</button>

    <script>
        function confirmarCompra() {
            return confirm("¿Está seguro de que desea confirmar esta compra?");
        }

        function revisarCompra() {
            alert("Revise todos los detalles de su compra antes de confirmar.");
        }
    </script>
</body>
</html>
`;

// AAA LEVEL
export const inusualWords = 
`<p>La física cuántica explora fenómenos que no se pueden explicar con la mecánica clásica. <a href="#" title="Fenómeno que ocurre a nivel subatómico, como la superposición cuántica.">Superposición cuántica</a> es un ejemplo de esto.</p>`;

export const abbreviations = 
`<p>El <abbr title="Hypertext Markup Language">HTML</abbr> es el lenguaje de marcado estándar para crear páginas web.</p>`;

export const levelofRead = 
`<p>El principio de incertidumbre de Heisenberg establece que no se puede conocer simultáneamente la posición y el momento de una partícula con precisión absoluta.</p>
<p><a href="explicacion-simple.html">Explicación más simple sobre el principio de incertidumbre</a></p>`;

export const pronuntiation = 
`<p>El principio de incertidumbre de Heisenberg establece que no se puede conocer simultáneamente la posición y el momento de una partícula con precisión absoluta.</p>
<p><a href="explicacion-simple.html">Explicación más simple sobre el principio de incertidumbre</a></p>`;

export const changeUser = 
`<form>
    <label for="pais">Seleccione su país:</label>
    <select id="pais" name="pais" onchange="if(confirm('¿Desea cambiar a una página diferente?')) { location.href=this.value; }">
        <option value="espana.html">España</option>
        <option value="mexico.html">México</option>
    </select>
</form>
`;

export const helpFinally = 
`<form>
    <label for="telefono">Número de teléfono:</label>
    <input type="text" id="telefono" name="telefono">
    <span id="ayuda-telefono">Incluye el código de país.</span>
</form>
`;
