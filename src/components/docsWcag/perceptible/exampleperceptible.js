/**
 * Estas variables almacenan los ejemplos a renderizar en el componente perceptible
 * @constant {String} 
 */

//Ejemplos A
export const imgExample = `<img src="imagen.jpg" alt="Descripción de la imagen" />`;
export const audioExample = 
`<audio controls>
    <source src="podcast.mp3" type="audio/mpeg" />
    Tu navegador no soporta el elemento de audio.
</audio>

<h4>Transcripción del Podcast</h4>
<p>Para aquellos que prefieren leer o no pueden escuchar el audio, aquí está la transcripción completa del podcast:</p>
<pre>
    <code>
[Introducción]
Bienvenidos al episodio de hoy donde discutimos los mejores consejos para mejorar la accesibilidad web.

[Minuto 1:30]
Comenzamos hablando sobre la importancia de las transcripciones en los podcasts.

[Minuto 3:45]
Nuestro invitado especial, Juan Pérez, comparte su experiencia sobre cómo implementar WCAG en proyectos reales.

[Minuto 7:20]
Conclusión y resumen de los puntos clave.
    </code>
</pre>
`;

export const textExample = 
`<video controls>
<source src="video.mp4" type="video/mp4" />
    <track 
            kind="subtitles" 
            src="subtitulos.vtt" 
            srclang="es" 
            label="Español" 
            default 
    />
    Tu navegador no soporta el elemento de video.
</video>
<p>Descripción del Video: Este video muestra un tutorial paso a paso sobre cómo implementar accesibilidad en una página web.</p>
`;

export const domExample = 
`<article>
<header>
    <h1>Accesibilidad Web</h1>
    <p>Por Juan Pérez</p>
</header>
<section>
    <h2>Introducción</h2>
    <p>La accesibilidad web es crucial para garantizar que todas las personas puedan acceder a la información en línea.</p>
</section>
<section>
    <h2>Estructura del Documento</h2>
    <p>Utilizar etiquetas semánticas como <header>, <nav>, <main>, <footer> ayuda a organizar el contenido.</p>
</section>
<footer>
    <p>Publicado el 1 de Septiembre de 2024</p>
</footer>
</article>
`;

export const ordenContent = 
`<div>
    <h1>Encabezado Principal</h1>
    <p>Este es un párrafo que proporciona información introductoria sobre el contenido siguiente.</p>
    
    <h2>Subtítulo de Sección</h2>
    <p>Este párrafo está relacionado con el subtítulo anterior y debe seguir el orden lógico de presentación.</p>
    
    <ul>
        <li>Elemento de lista 1: Información importante.</li>
        <li>Elemento de lista 2: Información adicional.</li>
    </ul>
    
    <p>Este párrafo sigue a la lista y proporciona contexto o detalles adicionales.</p>
    
    <footer>
        <p>Información de contacto y enlaces importantes.</p>
    </footer>
</div>
`;

export const colorExample = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de Uso del Color</title>
<style>
    .error {
        color: red;
        font-weight: bold;
    }
    .info {
        color: blue;
        font-weight: bold;
    }
    .warning {
        color: orange;
        font-weight: bold;
    }
    .message {
        background-color: lightgrey;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
</head>
<body>
<div class="message">
    <p class="error">Error: La información ingresada es incorrecta.</p>
    <p class="info">Información: El formulario ha sido enviado correctamente.</p>
    <p class="warning">Advertencia: El campo de la dirección está vacío.</p>
</div>

<p>Recuerda que los mensajes de error, advertencia e información están claramente indicados mediante texto, no solo con color.</p>
</body>
</html>
`;

export const autoplay = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Control del Audio</title>
<style>
    .audio-controls {
        margin-top: 10px;
    }
</style>
</head>
<body>
<h1>Ejemplo de Control del Audio</h1>

<!-- Audio que se reproduce automáticamente -->
<audio id="audioPlayer" autoplay>
    <source src="audio/ejemplo.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>

<!-- Controles de audio -->
<div class="audio-controls">
    <button onclick="togglePlayPause()">Pausar</button>
    <button onclick="stopAudio()">Detener</button>
    <label for="volumeControl">Volumen:</label>
    <input type="range" id="volumeControl" min="0" max="1" step="0.01" value="1" onchange="changeVolume(this)">
</div>

<script>
    const audio = document.getElementById('audioPlayer');
    
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            document.querySelector('button[onclick="togglePlayPause()"]').textContent = 'Pausar';
        } else {
            audio.pause();
            document.querySelector('button[onclick="togglePlayPause()"]').textContent = 'Reproducir';
        }
    }
    
    function stopAudio() {
        audio.pause();
        audio.currentTime = 0;
        document.querySelector('button[onclick="togglePlayPause()"]').textContent = 'Reproducir';
    }
    
    function changeVolume(element) {
        audio.volume = element.value;
    }
</script>
</body>
</html>
`;

//Ejemplos AA

export const exampleContrats = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de Contraste</title>
<style>
    body {
        background-color: #f5f5f5; /* Fondo claro */
        color: #333333; /* Texto oscuro */
        font-family: Arial, sans-serif;
        padding: 20px;
    }

    .high-contrast {
        background-color: #000000; /* Fondo oscuro */
        color: #ffffff; /* Texto claro */
        padding: 10px;
        border-radius: 5px;
    }

    .large-text {
        font-size: 1.5em; /* Texto grande */
        background-color: #ffff00; /* Fondo amarillo */
        color: #000000; /* Texto negro */
    }
</style>
</head>
<body>
<h1>Ejemplo de Contraste</h1>

<p>Este es un párrafo con un contraste de texto normal y fondo claro. El contraste aquí es de al menos 4.5:1.</p>

<div class="high-contrast">
    <p>Este es un bloque con alto contraste. El texto es blanco sobre fondo negro, proporcionando un contraste muy alto.</p>
</div>

<p class="large-text">
    Este texto es grande y está en un fondo amarillo con texto negro, proporcionando un contraste de al menos 3:1.
</p>
</body>
</html>
`;

export const exampleFontSize = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Redimensionar Texto</title>
<style>
    body {
        font-size: 16px; /* Tamaño base del texto */
        line-height: 1.5;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
    }

    h1 {
        font-size: 2em; /* Tamaño del texto en encabezados */
    }

    p {
        margin: 0 0 10px;
    }
    
    @media (min-width: 600px) {
        body {
            font-size: 18px; /* Tamaño del texto en pantallas más grandes */
        }
    }

    @media (min-width: 900px) {
        body {
            font-size: 20px; /* Tamaño del texto en pantallas aún más grandes */
        }
    }
</style>
</head>
<body>
<div class="container">
    <h1>Ejemplo de Redimensionamiento de Texto</h1>
    <p>Este es un párrafo de ejemplo que se ajusta a los requisitos de redimensionamiento de texto. Puedes aumentar el tamaño del texto hasta un 200% usando las configuraciones del navegador sin perder contenido ni funcionalidad.</p>
    <p>El diseño se ajustará para asegurar que el contenido se mantenga legible y funcional a medida que se aumenta el tamaño del texto.</p>
</div>
</body>
</html>
`;

export const sizeImage = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Texto HTML</title>
<style>
    h1 {
        font-size: 2em; /* Tamaño del texto que puede ser redimensionado */
        color: #333; /* Color del texto */
    }
</style>
</head>
<body>
<h1>Texto HTML Accesible</h1>
</body>
</html>
`;

export const betterContrast = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contraste Mejorado</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #ffffff; /* Fondo blanco */
        color: #000000; /* Texto negro con alto contraste */
        line-height: 1.6;
        padding: 20px;
    }

    h1, h2, h3 {
        color: #000000; /* Texto de encabezado negro */
    }

    .highlight {
        background-color: #ffeb3b; /* Fondo amarillo brillante */
        color: #000000; /* Texto negro */
        padding: 10px;
    }
</style>
</head>
<body>
<h1>Ejemplo de Contraste Mejorado</h1>
<p>Este es un ejemplo de texto con contraste mejorado. El contraste entre el texto negro y el fondo blanco es de 21:1, que es mucho más alto que el mínimo requerido de 7:1.</p>

<div class="highlight">
    <p>Este texto sobre un fondo amarillo brillante también cumple con el criterio de contraste mejorado.</p>
</div>
</body>
</html>
`;

export const offSound = 
`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sonido de Fondo</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .controls {
        margin: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        margin-right: 10px;
    }
</style>
</head>
<body>
<div class="controls">
    <button id="toggleSound">Activar Sonido</button>
</div>

<!-- Reproductor de audio con sonido de fondo -->
<audio id="backgroundSound" loop>
    <source src="path/to/background-sound.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>

<script>
    const audio = document.getElementById('backgroundSound');
    const button = document.getElementById('toggleSound');

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            button.textContent = 'Desactivar Sonido';
        } else {
            audio.pause();
            button.textContent = 'Activar Sonido';
        }
    });
</script>
</body>
</html>
`;
