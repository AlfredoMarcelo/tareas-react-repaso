# Calculadora interactiva


## Preparar el proyecto

se elimina
- setupTest
- reportWebVitals.js
- App.test.js
- logo.svg
- Vaciar los componentes que estan dentro de App.js, solo dejar <className="App">. Eliminar importacion de logo.svg
- vaciar declaraciones de App.css
- Vaciar en index.js la importación de reportWebVitals y los comentarios

### `Comandos`

Para crear el proyecto
- npm create-react-app nombreProyecto

Para arrrancar el proyecto
- npm start

### `Importar imagenes`

Crear carpeta
- dentro de src, crear carpeta de imagenes

Importar imagen local
- dentro del componente se debe añadir con el tag img e importar indicando el nombre y ubicacion ej: import logo from "./imagenes/nombreimagen.tipo". Para hacer uso de la imagen, se debe declarar dentro de src={logo}, el mismo nombre que utilizamos para la importación

## `Hoja de estilos`

Cuando se van creando componentes, es de buena practica crear una carpeta dentro de src para las hojas de estilos, esto con el fin de mantener el orden si cada componente va a tener una. La hoja de estilo debe tener el mismo nombre que el componente pero con su tipo .css

### `arbol componentes`

Index.js es el componente principal, es de ahí que se envian todos los componentes a la vista html.

Para los componentes se debe crear una carpeta dentro de src
- componentes

### Agenda

- Las llaves {} nos permiten insertar codigo de javascript dentro de los JSX

- {props.children}, son los hijos o todo lo que este dentro de un div. En el ejercicio cuando se declara el componente Boton, se declara el numero 1, 1 vendría siendo el children del componente Boton.

- ``, para crear plantillas literales

- isNaN(), Not-A-Number (no es un número) sirve para verificar si el valor ingresado dentro del metodo es o no un numero, si se ingresa isNaN(2) el resultado será "false", porque si es un número.

- `return isNaN(valor) && (valor != '.') && (valor != '=');`, dentro de un return se puede ingresar estas condiciones con &&, destacar que van con parentesis para mejor lectura

- .trimEnd(), permite eliminar espacios al final de una cadena

- declarar componentes con funcion flecha, se utiliza una variable const, se utiliza para componentes simples. Ej: 
`const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);`

export default Pantalla;

- cuando se agregue un componente hijo, si no se va a agregar un valor, no es necesario declarar el componentes con etiqueta de apertura y de cierre. Ej: <Pantalla/>

- recordar exportar el componente y en el padre importarlo

- si no se agrega el return en la funcion del componente, no arrojará error, pero no se podra visualizar el componente aunque se haya exportado

- cuando se define un componente funcional con la variable const, nos aseguramos que no pueda ser declarado otro componente con el mismo nombre

- `onClick={props.manejarClic(props.children)}>, esto es una llamada a una función, no retornara el resultado que buscamos.`

- `onClick={() => props.manejarClic(props.children)}>, esto es una ejecucion de la función y si realizará la operación. Aqui se esta usando una funcion anonima, una funcion nueva`
al agregar ()=>, le dice a react o js que queremos que se llame a la función,  onClick es una función que espera llamar a otra función, por eso se agrega "() =>" se esta haciendo  min 5:01:00


- Las cadenas de caracteres o string vacias '' son FALSAS

- Las cadenas de carateres o string con letra son VERDADERAS

- Se uso la librería mathJs, se instala desde la carpeta principal del proyecto con el siguiente codigo => npm mathjs install

- npm => node package manager

- React-icons, se importa desde https://react-icons.github.io/react-icons/. Se instala con el node package manager(npm).

- Fragmentos, se usa el <>, es para no agregar un div al html, ya que este tiene margin, border, paddin que pueden afectar el diseño de la página

- Un componente no puede tener dos div principales, solo puede tener uno

-  map, es un metodo que pasara un argumento para una funcion y va a realizar lo que nosotros queremos

- cada tarea se va a representar como un objeto en el arreglo(array).