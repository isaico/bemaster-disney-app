# Presentacion

¡Hola que tal! Me presento soy Isaías García, un joven dedicado, con ganas de progresar y aprender, estoy muy entusiasmado con la oportunidad y espero poder aplicar para ser el desarrollador frontend que buscan!

# Descripcion de la app

Realizado con react, este aplicativo web sigue los parametros enviados por el pdf para la creacion de los componentes solicitados.

● Componente llamado 'Login' (implementando la lógica de validación de
campos vacíos y caracteres permitidos para el campo de email)
● Componente llamado 'Home' que contenga 5 cards, los cuales
representan las categorías a las cuales ese usuario logueado tendrá
acceso y un navbar básico (dejarémos que tu sensibilidad a la fuerza te
provea la inspiración para proponer los links que deben estar en el
navbar).
● Componente llamado contentCategory donde se presente, por filas,
todo el contenido relacionado a la categoría seleccionada desde el
componente 'Home'.
● Un componente llamado contentDetails donde se visualice el contenido
multimedia seleccionado desde el componente contentCategory y su
respectiva sinopsis o resumen.

---

### Persistencia

Para la persistencia de datos utilicé `Firebase` y también lo utilicé para la Autenticación vía Email y Contraseña

Aquí proporciono un usuario ya creado `email:a@a.com` y `contraseña:asd123`, pero sentite libre de crear un nuevo usuario...

La base de datos tiene dummy info que luego debe ser modificada para mostrar información más acertada

### Estilos

El estilo está determinado por cada componente, utilice archivos CSS, ya que no se especificó el modo de uso, está basado en la metodología BEM e inspirado como
bien se puede apreciar en la plataforma Disney+

Utilice varias medidas estáticas por temas prácticos, ya que no está pensado para responsividad

## Flow de la app

-   En la raíz se obtiene un Login/register que autoriza la navegación de rutas privadas.

-   Una vez autorizado podemos navegar entre las categorías provistas por el componente `contentCategory` que nos dará paso a una lista de datos cargada dependiendo la categoría seleccionada.

-   Al seleccionar una película de cualquier categoría nos enviará a un componente de detalle `contentDetails` donde se podrá ver la info del ítem seleccionado,

-   También cuenta con un simulador de reproductor realizado con la librería `react-player`

## Script para levantar el proyecto

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para verlo en su navegador.
